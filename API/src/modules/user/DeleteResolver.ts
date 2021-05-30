import { Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Todo, User } from "../../entities";
import { isAuthorized } from "../../middleware/isAuthorized";
import { MyContext } from "../../types";
import { DeleteResponse } from "../types";

@Resolver()
export class DeleteResolver {
  @Mutation(() => DeleteResponse)
  @UseMiddleware(isAuthorized())
  async deleteAccount(@Ctx() { req, em }: MyContext): Promise<DeleteResponse> {
    try {
      await em.begin();
      await em.nativeDelete(Todo, { user: req.user });
      const deletedAccount = await em.nativeDelete(User, {
        id: req.user.id,
      });
      if (deletedAccount === 0) {
        await em.rollback();
        throw new Error(
          "We couldn't find a user associated with your session, try logging back in again."
        );
      } else await em.commit();
      return { success: true };
    } catch (err) {
      console.log(err);
      return {
        errors: [{ message: err.message }],
      };
    }
  }
}
