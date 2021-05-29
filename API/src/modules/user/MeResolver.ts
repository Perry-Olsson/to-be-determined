import { User } from "../../entities";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  Query,
  Resolver,
  Root,
  Subscription,
  UseMiddleware,
} from "type-graphql";
import { Confirmation } from "./me/ConfirmedSubscription";
import { isAuthorized } from "../../middleware/isAuthorized";

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  @UseMiddleware(isAuthorized({ populate: ["todos"] }))
  async me(@Ctx() { req }: MyContext): Promise<User | null> {
    return req.user;
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
