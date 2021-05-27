import gql from "graphql-tag";

export const RESEND_CONFIRMATION = gql`
  mutation ResendConfirmation {
    resendConfirmation
  }
`;
