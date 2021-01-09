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

export class UserRepository extends EntityRepository<User> {
  public async initializeUser(data: RegisterInput): Promise<UserResponse> {
    const formattedInput = this.formatRegistration(data);
    const qb = this.createQueryBuilder();

    const errors = await validateRegistration(formattedInput, qb);

    if (!errors.length) return { user: this.create(formattedInput) };

    return { errors };
  }

  public async validateLogin(data: LoginInput): Promise<LoginResponse> {
    const { usernameOrEmail, password } = this.formatLogin(data);

    const user = await this.getUser(usernameOrEmail);

    if (!user) return loginError;

    const match = await bcrypt.compare(password, user.password);
    if (!match) return loginError;

    const token = jwt.sign({ id: user.id }, config.jwtSecret);

    return {
      user,
      token,
    };
  }

  private async getUser(usernameOrEmail: string): Promise<User | null> {
    return validateEmail(usernameOrEmail)
      ? await this.findOne({ email: usernameOrEmail })
      : await this.findOne({ username: usernameOrEmail });
  }

  private formatRegistration(data: RegisterInput): RegisterInput {
    return {
      email: data.email.toLowerCase().trim(),
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      username: data.username.toLowerCase().trim(),
      password: data.password,
    };
  }

  private formatLogin({ usernameOrEmail, password }: LoginInput): LoginInput {
    return {
      usernameOrEmail: usernameOrEmail.toLowerCase().trim(),
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
