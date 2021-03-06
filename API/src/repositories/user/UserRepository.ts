import { EntityRepository } from "@mikro-orm/postgresql";
import { User } from "../../entities";
import validateRegistration from "./register/validateRegistration";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validate } from "email-validator";
import config from "../../utils/config";
import { loginError, updateError, UpdateResponse } from "./types";
import {
  LoginInput,
  LoginResponse,
  RegisterInput,
  RegisterResponse,
} from "../../modules/user/types";
import { lowerCaseUsername } from "../../constants";
import { sendAccountConfirmation } from "../../utils/mail";

export class UserRepository extends EntityRepository<User> {
  public async initializeUser(input: RegisterInput): Promise<RegisterResponse> {
    const formattedInput = this.formatRegistration(input);

    const errors = await validateRegistration(formattedInput, this);

    if (errors.length) return { errors };

    const user = this.create(await this.hashPassword(formattedInput));
    sendAccountConfirmation(user);
    return { user };
  }

  public async updateUser(
    emailOrUsername: string,
    update: (user: User) => void
  ): Promise<UpdateResponse> {
    const user = await this.getUser(emailOrUsername);
    if (!user) return { error: updateError, user: null };

    update(user);
    await this.flush();

    return { user, error: null };
  }

  private async hashPassword(input: RegisterInput): Promise<RegisterInput> {
    const hashedPassword = await bcrypt.hash(input.password, 12);
    return {
      ...input,
      password: hashedPassword,
    };
  }

  public async validateLogin(data: LoginInput): Promise<LoginResponse> {
    const { emailOrUsername, password } = this.formatLogin(data);

    const user = await this.getUser(emailOrUsername);

    if (!user) return loginError;

    const match = await bcrypt.compare(password, user.password);
    if (!match) return loginError;

    const token = jwt.sign({ email: user.email }, config.jwtSecret);

    return {
      user,
      token,
    };
  }

  public async getUser(emailOrUsername: string): Promise<User | null> {
    return validate(emailOrUsername)
      ? await this.findOne({ email: emailOrUsername }, ["todos"])
      : // eslint-disable-next-line
        await this.findOne({ [lowerCaseUsername]: emailOrUsername } as any, [
          "todos",
        ]);
  }

  private formatRegistration(input: RegisterInput): RegisterInput {
    return {
      email: input.email.toLowerCase().trim(),
      firstName: input.firstName.trim(),
      lastName: input.lastName.trim(),
      username: input.username.trim(),
      password: input.password,
    };
  }

  private formatLogin({ emailOrUsername, password }: LoginInput): LoginInput {
    return {
      emailOrUsername: emailOrUsername.toLowerCase().trim(),
      password,
    };
  }
}
