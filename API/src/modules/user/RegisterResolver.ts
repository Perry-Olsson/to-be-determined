import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  ObjectType,
  Field,
} from "type-graphql";
import { User } from "../../entities/User";
import { RegisterInput } from "./register/RegisterInput";
import { MyContext } from "../../types";
import { UserResponse } from "./register/UserResponse";

@ObjectType()
class HelloResponse {
  @Field({ nullable: true })
  hello?: string;
}

@Resolver()
export class RegisterResolver {
  @Query(() => HelloResponse)
  async hello(): Promise<HelloResponse> {
    return {
      hello: "hello world",
    };
  }

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
