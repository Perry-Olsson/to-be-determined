import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
  ObjectType,
  Field,
} from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entities/User";
import { RegisterInput } from "./register/RegisterInput";
import { isAuthorized } from "../../middleware/isAuthorized";
import { MyContext } from "../../types";
import { UserResponse } from "./register/UserResponse";
import { AuthError } from "../../types";

@ObjectType()
class HelloResponse {
  @Field({ nullable: true })
  errors?: AuthError;

  @Field({ nullable: true })
  hello?: string;
}

@Resolver()
export class RegisterResolver {
  @Query(() => HelloResponse)
  @UseMiddleware(isAuthorized("Get the almighty hello world"))
  async hello(): Promise<HelloResponse> {
    return {
      hello: "hello world",
    };
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("data")
    data: RegisterInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    const repo = em.getRepository(User);

    const { password } = data;
    const hashedPassword = await bcrypt.hash(password, 12);

    const response = await repo.initializeUser({
      ...data,
      password: hashedPassword,
    });

    if (response.user) await repo.persistAndFlush(response.user);

    return response;
  }
}
