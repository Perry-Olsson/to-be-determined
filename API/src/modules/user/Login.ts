import { UserInputError } from "apollo-server-express";
import { User } from "../../entities";
import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import LoginInput from "./login/LoginInput";
import LoginPayload from "./login/LoginPayload";

@Resolver()
export class LoginResolver {
  @Mutation(() => LoginPayload)
  async login(
    @Arg("data") { email, password }: LoginInput
  ): Promise<LoginPayload> {
    const user = await User.findOne({ email });
    if (!user) throw new UserInputError("Invalid username or password");

    const match = bcrypt.compare(password, user.password);
    if (!match) throw new UserInputError("Invalid username or password");

    const token = jwt.sign({ id: user.id }, "secret");

    return {
      user,
      token,
    };
  }
}
