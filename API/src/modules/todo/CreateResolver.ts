import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Todo, User } from "../../entities";
import { MyContext } from "../../types";
import { CreateTodoInput, CreateTodoResponse } from "./create";
import { decodeToken, getToken } from "../../utils/authorization";

@Resolver()
export class TodoResolver {
  @Mutation(() => CreateTodoResponse)
  async createTodo(
    @Arg("input") input: CreateTodoInput,
    @Ctx() { em, req }: MyContext
  ): Promise<CreateTodoResponse> {
    const token = getToken(req);
    const { email } = decodeToken(token);
    const user = await em.findOne(User, { email });
    if (user) {
      const repo = em.getRepository(Todo);
      const todo = repo.create({ ...input, user });

      await em.persistAndFlush(todo);

      return { todo };
    }
    return { errors: [{ message: "Must be logged in to create a todo" }] };
  }
}
