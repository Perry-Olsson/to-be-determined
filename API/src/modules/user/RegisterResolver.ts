import { Resolver, Mutation, Arg, Ctx } from "type-graphql";

import { User } from "../../entities/User";
import { RegisterInput } from "./register/RegisterInput";
import { MyContext } from "../../types";
import { UserResponse } from "./register/UserResponse";

@Resolver()
export class RegisterResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("input")
    input: RegisterInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    const repo = em.getRepository(User);

    const response = await repo.initializeUser({
      ...input,
    });

    if (response.user) await repo.persistAndFlush(response.user);

    return response;
  }
}
