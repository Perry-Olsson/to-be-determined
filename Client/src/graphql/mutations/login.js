import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      errors {
        message
      }
      user {
        id
        firstName
        lastName
        username
      }
      token
    }
  }
`;
