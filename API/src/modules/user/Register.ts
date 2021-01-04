import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entities/User";
import { RegisterInput } from "./register/RegisterInput";
import { isAuthorized } from "../../middleware/isAuthorized";
import { MyContext } from "../../types";
import { UserResponse } from "./register/UserResponse";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  @UseMiddleware(isAuthorized)
  async hello(): Promise<string> {
    return "hello";
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("data")
    { firstName, lastName, email, username, password }: RegisterInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    const repo = em.getRepository(User);
    const hashedPassword = await bcrypt.hash(password, 12);

    const response = await repo.init({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
    });

    if (response.user) await repo.persistAndFlush(response.user);

    return response;
  }
}
