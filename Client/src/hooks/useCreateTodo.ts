import { useApolloClient } from "@apollo/client";
import { FormikHelpers } from "formik";
import { TodoValues } from "../app/Profile/CreateTodo/TodoModal";
import { useCreateTodoMutation } from "../generated/graphql";
import { ME } from "../graphql/queries";
import { formatError } from "./useRegister";

export const useSaveTodo = (
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const client = useApolloClient();
  const [createTodo] = useCreateTodoMutation();

  const onSubmit = async (
    input: TodoValues,
    helpers: FormikHelpers<TodoValues>
  ) => {
    input.notes = input.notes.filter((n) => n !== "");

    const { data } = await createTodo({ variables: { input } });
    if (data) {
      if (!data.createTodo.todo) {
        alert(formatError(data.createTodo.errors!));
      } else {
        const user = client.readQuery({ query: ME })!;
        const newTodos = [...user.me.todos, data.createTodo.todo];
        client.writeQuery({
          query: ME,
          data: {
            me: {
              __typename: "User",
              id: user.me.id,
              todos: newTodos,
            },
          },
        });
      }
      helpers.resetForm();
    } else {
      alert("oops something went wrong on our end");
      // alert(formatError(errors!));
    }
    setVisible(false);
  };

  return onSubmit;
};
