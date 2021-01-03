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
import validateRegistration from "../../middleware/validateRegistration";

@ObjectType()
export class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field({ nullable: true })
  user?: User;
}

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  @UseMiddleware(isAuthorized)
  async hello(): Promise<string> {
    return "hello";
  }

  @Mutation(() => UserResponse)
  @UseMiddleware(validateRegistration)
  async register(
    @Arg("data")
    { firstName, lastName, email, username, password }: RegisterInput,
    @Ctx() { em }: MyContext // eslint-disable
  ): Promise<UserResponse> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = em.create(User, {
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
    });

    await em.persistAndFlush(user);

    return {
      user,
    };
  }
}
