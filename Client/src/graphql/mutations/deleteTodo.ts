import { gql } from "@apollo/client";

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Float!) {
    deleteTodo(id: $id) {
      errors {
        message
      }
      success
    }
  }
`;
