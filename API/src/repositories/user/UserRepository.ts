import { EntityRepository } from "@mikro-orm/postgresql";
import { User } from "../../entities";
import LoginInput from "../../modules/user/login/LoginInput";
import LoginResponse from "../../modules/user/login/LoginResponse";
import { RegisterInput } from "../../modules/user/register/RegisterInput";
import { UserResponse } from "../../modules/user/register/UserResponse";
import validateRegistration from "./register/validateRegistration";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { validator } from "../../types";
// import { FieldError } from "../../types/graphql/Errors";

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
    if (!user) return this.loginError;

    const match = await bcrypt.compare(password, user.password);
    if (!match) return this.loginError;

    const token = jwt.sign({ id: user.id }, "secret");

    return {
      user,
      token,
    };
  }

  loginError: LoginResponse = {
    errors: {
      message: "Invalid email or password",
    },
  };

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
      }
    }
    return formattedData;
  }
}
