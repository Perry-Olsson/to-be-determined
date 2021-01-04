import { User } from "../../entities";
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";

import LoginInput from "./login/LoginInput";
import LoginPayload from "./login/LoginResponse";
import { MyContext } from "../../types";

@Resolver()
export class LoginResolver {
  @Mutation(() => LoginPayload)
  async login(
    @Arg("data") data: LoginInput,
    @Ctx() { em }: MyContext
  ): Promise<LoginPayload> {
    const repo = em.getRepository(User);

    const response = await repo.validateLogin(data);

    return response;
  }
}
