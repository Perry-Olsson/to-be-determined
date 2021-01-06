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

export class UserRepository extends EntityRepository<User> {
  public async initializeUser(data: RegisterInput): Promise<UserResponse> {
    console.log("---------", this, "----------");
    const formattedInput = this.formatRegistration(data);
    const qb = this.createQueryBuilder();

    const errors = await validateRegistration(formattedInput, qb);

    if (!errors.length) return { user: this.create(formattedInput) };

    return { errors };
  }

  public async validateLogin(data: LoginInput): Promise<LoginResponse> {
    const { email, password } = this.formatLogin(data);

    const user = await this.findOne({ email });
    if (!user) return loginError;

    const match = await bcrypt.compare(password, user.password);
    if (!match) return loginError;

    const token = jwt.sign({ id: user.id }, config.jwtSecret);

    return {
      user,
      token,
    };
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

  private formatLogin({ email, password }: LoginInput): LoginInput {
    return {
      email: email.toLowerCase().trim(),
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
