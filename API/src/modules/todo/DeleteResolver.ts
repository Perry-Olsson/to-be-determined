import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Todo } from "../../entities";
import { isAuthorized } from "../../middleware/isAuthorized";
import { MyContext } from "../../types";
import { DeleteResponse } from "../types";

@Resolver()
export class DeleteResolver {
  @Mutation(() => DeleteResponse)
  @UseMiddleware(isAuthorized())
  async deleteTodo(
    @Arg("id") id: number,
    @Ctx() { req, em }: MyContext
  ): Promise<DeleteResponse> {
    try {
      const response = await em.nativeDelete(Todo, { id, user: req.user });

      if (response === 0)
        return {
          errors: [
            {
              message:
                "Oops! That todo either has been deleted already or it belongs to someone else",
            },
          ],
        };

      return { success: true };
    } catch (err) {
      return { errors: [{ message: err.message }] };
    }
  }
}
