import { Resolver, Query, Mutation, Arg, UseMiddleware } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entities/User";
import { RegisterInput } from "./register/RegisterInput";
import { isAuthorized } from "../../middleware/isAuthorized";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  @UseMiddleware(isAuthorized)
  async hello(): Promise<string> {
    return "hello";
  }

  @Mutation(() => User)
  async register(
    @Arg("data")
    { firstName, lastName, email, username, password }: RegisterInput // eslint-disable
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
    }).save();

    return user;
  }
}
