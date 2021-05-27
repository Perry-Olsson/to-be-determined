import { gql } from "@apollo/client";

export const baseUserFields = gql`
  fragment baseUserFields on User {
    id
    username
    email
    firstName
    lastName
    fullName
    confirmed
  }
`;

export const todoFields = gql`
  fragment todoFields on Todo {
    id
    title
    notes
  }
`;

export const extraUserFields = gql`
  fragment extraUserFields on User {
    createdAt
    updatedAt
  }
`;
