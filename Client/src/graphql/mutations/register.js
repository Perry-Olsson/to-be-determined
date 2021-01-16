import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      errors {
        field
        message
      }
      user {
        id
        email
        username
      }
    }
  }
`;
