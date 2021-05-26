import { Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { Todo } from "../../entities";
import { MyContext } from "../../types";
import { isAuthorized } from "../../middleware/isAuthorized";
import { FetchTodosResponse } from "./fetch";

@Resolver()
export class TodoResolver {
  @Query(() => FetchTodosResponse)
  @UseMiddleware(isAuthorized())
  async fetchTodo(@Ctx() { em, req }: MyContext): Promise<FetchTodosResponse> {
    const todos = await em.find(Todo, { user: req.user });
    return { todos };
  }
}
