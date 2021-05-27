import { Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuthorized } from "../../middleware/isAuthorized";
import { MyContext } from "../../types";
import { sendAccountConfirmation } from "../../utils/mail";

@Resolver()
export class ResendResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuthorized({ checkConfirmation: false }))
  async resendConfirmation(@Ctx() { req }: MyContext): Promise<boolean> {
    try {
      await sendAccountConfirmation(req.user);
      return true;
    } catch (err) {
      return false;
    }
  }
}
