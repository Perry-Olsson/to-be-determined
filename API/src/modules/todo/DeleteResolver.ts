import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Todo } from "../../entities";
import { isAuthorized } from "../../middleware/isAuthorized";
import { MyContext } from "../../types";
import { DeleteTodoResponse } from "./delete/DeleteTodoResponse";

@Resolver()
export class DeleteResolver {
  @Mutation(() => DeleteTodoResponse)
  @UseMiddleware(isAuthorized())
  async deleteTodo(
    @Arg("id") id: number,
    @Ctx() { req, em }: MyContext
  ): Promise<DeleteTodoResponse> {
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
