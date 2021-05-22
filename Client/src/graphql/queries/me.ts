import { gql } from "@apollo/client";
import { baseUserFields, extraUserFields } from "../fragments";

export const ME = gql`
  query Me($getAllFields: Boolean = false) {
    me {
      ...baseUserFields
      ...extraUserFields @include(if: $getAllFields)
    }
  }
  ${baseUserFields}
  ${extraUserFields}
`;
