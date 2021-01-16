import { gql } from "@apollo/client";

const extraUserFields = gql`
  fragment extraUserFields on User {
    firstName
    lastName
    fullName
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
      ...extraUserFields @include(if: $getAllFields)
    }
  }
  ${extraUserFields}
`;
