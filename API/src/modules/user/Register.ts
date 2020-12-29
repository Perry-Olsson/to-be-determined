import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entities/User";
import { RegisterInput } from "./register/RegisterInput";
// import { isAuthorized } from "../../middleware/isAuthorized";
import { MyContext } from "../../types";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  // @UseMiddleware(isAuthorized)
  async hello(): Promise<string> {
    return "hello";
  }

  @Mutation(() => User)
  async register(
    @Arg("data")
    { firstName, lastName, email, username, password }: RegisterInput,
    @Ctx() { em }: MyContext // eslint-disable
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = em.create(User, {
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
    });

    await em.persistAndFlush(user);

    return user;
  }
}
