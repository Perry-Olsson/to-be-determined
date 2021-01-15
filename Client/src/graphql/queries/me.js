import { gql } from "@apollo/client";

export const ME = gql`
  query {
    me {
      firstName
      lastName
      username
      email
    }
  }
`;
