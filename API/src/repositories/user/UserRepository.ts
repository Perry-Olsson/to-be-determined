import { EntityRepository } from "@mikro-orm/postgresql";
import { User } from "../../entities";
import validateRegistration from "./register/validateRegistration";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import config from "../../utils/config";
import { loginError } from "./types";
import {
  LoginInput,
  LoginResponse,
  RegisterInput,
  UserResponse,
} from "../../modules/user/types";
import validateEmail from "../../utils/validateEmail";
import { lowerCaseUsername } from "../../constants";
import { sendAccountConfirmation } from "../../utils/sendMail";

export class UserRepository extends EntityRepository<User> {
  public async initializeUser(input: RegisterInput): Promise<UserResponse> {
    const formattedInput = this.formatRegistration(input);

    const errors = await validateRegistration(formattedInput, this);

    if (!errors.length) {
      const user = this.create(await this.hashPassword(formattedInput));
      sendAccountConfirmation(user);
      return { user };
    }

    return { errors };
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
    return validateEmail(emailOrUsername)
      ? await this.findOne({ email: emailOrUsername })
      : await this.findOne({ [lowerCaseUsername]: emailOrUsername } as any); // eslint-disable-line
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
//   private formatInput(data: UserInput): UserInput {
//     const formattedData: any = {}
//     for (const field in data) {
//       switch (field) {
//         case "username" || "email":
//           formattedData[field] = data[field].toLowerCase().trim();
//           break;
//         case "password":
//           formattedData[field] = data[field];
//           break;
//         default:
//           formattedData[field] = data[field].trim();
//       }
//     }
//     return formattedData;
//   }
// }

// type UserInput = LoginInput | RegisterInput
