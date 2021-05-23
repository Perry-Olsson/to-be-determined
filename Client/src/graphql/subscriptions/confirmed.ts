import gql from "graphql-tag";

export const CONFIRMED_SUB = gql`
  subscription ConfirmedNotification($email: String!) {
    confirmedNotification(email: $email) {
      confirmed
    }
  }
`;
