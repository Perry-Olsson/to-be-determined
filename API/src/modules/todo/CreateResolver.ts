import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Todo } from "../../entities";
import { BaseError, MyContext } from "../../types";
import { CreateTodoInput, CreateTodoResponse } from "./create";
import { isAuthorized } from "../../middleware/isAuthorized";

@Resolver()
export class TodoResolver {
  @Mutation(() => CreateTodoResponse)
  @UseMiddleware(isAuthorized)
  async createTodo(
    @Arg("input") input: CreateTodoInput,
    @Ctx() { em, req }: MyContext
  ): Promise<CreateTodoResponse> {
    //validate
    const errors: BaseError[] = [];
    if (input.title.length > 256)
      errors.push({
        message: "Sorry the title has to be fewer than 257 characters",
      });
    if (input.notes.length > 100)
      errors.push({ message: "Sorry a todo cant have over 100 notes" });

    if (errors.length) return { errors };

    const todo = em.create(Todo, { ...input, user: req.user });

    await em.persistAndFlush(todo);

    return { todo };
  }
}
