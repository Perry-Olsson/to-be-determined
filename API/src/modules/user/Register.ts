import { Resolver, Query, Mutation, ArgsType, Field, Args } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entities/User";

@ArgsType()
class RegisterArgs {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;
}

@Resolver(User)
export class RegisterResolver {
  @Query(() => String, {})
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => User)
  async register(
    @Args() { firstName, lastName, email, username, password }: RegisterArgs
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
