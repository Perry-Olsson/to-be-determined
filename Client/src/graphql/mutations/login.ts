import { gql } from "@apollo/client";
import { baseUserFields } from "../fragments";

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      errors {
        message
      }
      user {
        ...baseUserFields
      }
      token
    }
  }
  ${baseUserFields}
`;
