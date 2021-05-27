import { gql } from "@apollo/client";
import { baseUserFields, extraUserFields, todoFields } from "../fragments";

export const ME = gql`
  query Me($getAllFields: Boolean = false) {
    me {
      ...baseUserFields
      todos {
        ...todoFields
      }
      ...extraUserFields @include(if: $getAllFields)
    }
  }
  ${baseUserFields}
  ${todoFields}
  ${extraUserFields}
`;
