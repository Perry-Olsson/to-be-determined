import { User } from "../../entities";
import { MyContext } from "src/types";
import { Arg, Ctx, Query, Resolver, Root, Subscription } from "type-graphql";
import { decodeToken, getToken } from "../../utils/authorization";
import { Confirmation } from "./me/confirmedSubscription";

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: MyContext): Promise<User | null> {
    try {
      const repo = em.getRepository(User);
      const token = getToken(req);
      const { email } = decodeToken(token);
      const user = await repo.getUser(email);
      return user ? user : null;
    } catch (e) {
      return null;
    }
  }

  @Subscription(() => Confirmation, {
    topics: ({ args }) => args.email,
  })
  async confirmedNotification(
    @Root() confirmedPayload: boolean,
    @Arg("email") _email: string
  ): Promise<Confirmation> {
    return { confirmed: confirmedPayload };
  }
}
