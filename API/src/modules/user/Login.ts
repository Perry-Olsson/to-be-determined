import { UserInputError } from "apollo-server-express";
import { User } from "../../entities";
import { Resolver, Mutation, Arg } from "type-graphql";
import { getRepository } from "typeorm";
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
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ email });
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
