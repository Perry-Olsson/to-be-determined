import { gql } from "@apollo/client";
import { baseUserFields, todoFields } from "../fragments";

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      errors {
        message
      }
      user {
        ...baseUserFields
        todos {
          ...todoFields
        }
      }
      token
    }
  }
  ${baseUserFields}
  ${todoFields}
`;
