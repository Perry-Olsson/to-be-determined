export const Login = `
  mutation ($input: LoginInput!) {
    login (input: $input) {
      errors {
        message
      }
      user {
        id
        firstName
        lastName
        username
      }
      token
    }
  }
`;
