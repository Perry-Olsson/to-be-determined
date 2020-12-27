import { User } from "../../../src/entities";
import { MyContext } from "src/types/MyContext";
import { Ctx, Query, Resolver } from "type-graphql";
import jwt from "jsonwebtoken";

interface decodedToken {
  id: number;
  iat: number;
}

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext): Promise<User | null> {
    const token = req.headers.authorization
      ? req.headers.authorization.substr(7)
      : "";
    try {
      const decodedToken = jwt.verify(token, "secret") as decodedToken;
      const user = await User.findOne({ id: decodedToken.id });
      return user ? user : null;
    } catch (e) {
      return null;
    }
  }
}
