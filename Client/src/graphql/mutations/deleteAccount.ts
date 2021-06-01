import { gql } from "@apollo/client";

export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount {
    deleteAccount {
      errors {
        message
      }
      success
    }
  }
`;
