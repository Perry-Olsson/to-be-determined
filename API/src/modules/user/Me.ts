import { User } from "../../../src/entities";
import { MyContext, DecodedToken } from "src/types";
import { Ctx, Query, Resolver } from "type-graphql";
import jwt from "jsonwebtoken";
import { getToken } from "../../utils/authorization";

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: MyContext): Promise<User | null> {
    try {
      const decodedToken = jwt.verify(getToken(req), "secret") as DecodedToken;
      const user = await em.findOne(User, { id: decodedToken.id });
      return user ? user : null;
    } catch (e) {
      return null;
    }
  }
}
