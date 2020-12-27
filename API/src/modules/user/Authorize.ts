import { UserInputError } from "apollo-server-express";
import { User } from "../../../src/entities";
import { Resolver, Mutation, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import AuthorizeInput from "./authorize/AuthorizeInput";
import AuthorizePayload from "./authorize/AuthorizePayload";

@Resolver()
export class AuthorizeResolver {
  @Mutation(() => AuthorizePayload)
  async authorize(
    @Arg("data") { username, password }: AuthorizeInput
  ): Promise<AuthorizePayload> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ username });
    if (!user) throw new UserInputError("Invalid username or password");

    const match = bcrypt.compare(password, user.password);
    if (!match) throw new UserInputError("Invalid username or password");

    const token = jwt.sign({ username: user.username }, "secret");

    return {
      user,
      token,
    };
  }
}
