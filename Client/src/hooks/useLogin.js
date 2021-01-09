import { useMutation } from "urql";

import { Login } from "../graphql/mutations";

export const useLogin = setUser => {
  const [result, _login] = useMutation(Login);

  const tryLogin = async input => {
    try {
      const { data } = await _login({ data: input });
      const {
        login: { errors, token, user },
      } = data;

      if (errors) alert(errors.message);
      else
        setUser({
          token,
          user,
        });
    } catch (e) {
      console.error(e);
      console.log("------------gql error-----------\n", result.error);
    }
  };

  return [result, tryLogin];
};
