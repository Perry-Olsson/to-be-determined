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
  public async init(data: RegisterInput): Promise<UserResponse> {
    const formattedInput = this.formatInput(data);
    const qb = this.createQueryBuilder();
    const errors = await validateRegistration(formattedInput, qb);

    if (!errors.length) return { user: this.create(formattedInput) };

    return { errors };
  }

  public async validateLogin(data: LoginInput): Promise<LoginResponse> {
    const { email, password } = this.formatInput(data);

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

  private formatInput(data: any): any {
    const formattedData: any = {};
    for (const field in data) {
      switch (field) {
        case "username" || "email":
          formattedData[field] = data[field].toLowerCase().trim();
          break;
        case "password":
          formattedData[field] = data[field];
          break;
        default:
          formattedData[field] = data[field].trim();
          break;
      }
    }
    return formattedData;
  }
}

// type RawInput = RegisterInput | LoginInput
