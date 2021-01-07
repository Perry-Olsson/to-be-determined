export const Login = `
  mutation ($data: LoginInput!) {
    login (data: $data) {
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
