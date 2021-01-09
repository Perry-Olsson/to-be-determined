import { useMutation } from "urql";

import { Login } from "../graphql/mutations";

export const useLogin = () => {
  const [result, _login] = useMutation(Login);

  const loginUser = async input => {
    const {
      data: { login },
    } = await _login(input);
    return login;
  };

  return [result, loginUser];
};
