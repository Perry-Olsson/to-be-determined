import { gql } from "@apollo/client";

const extraUserFields = gql`
  fragment extraUserFields on User {
    createdAt
    updatedAt
  }
`;

export const ME = gql`
  query Me($getAllFields: Boolean = false) {
    me {
      id
      username
      email
      firstName
      lastName
      fullName
      confirmed
      ...extraUserFields @include(if: $getAllFields)
    }
  }
  ${extraUserFields}
`;
