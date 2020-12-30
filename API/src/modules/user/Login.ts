import { UserInputError } from "apollo-server-express";
import { User } from "../../entities";
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import LoginInput from "./login/LoginInput";
import LoginPayload from "./login/LoginPayload";
import { MyContext } from "../../types";

@Resolver()
export class LoginResolver {
  @Mutation(() => LoginPayload)
  async login(
    @Arg("data") { email, password }: LoginInput,
    @Ctx() { em }: MyContext
  ): Promise<LoginPayload> {
    const user = await em.findOne(User, { email });
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
