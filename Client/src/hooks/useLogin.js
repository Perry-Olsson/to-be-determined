import { useMutation } from "urql";

import { Login } from "../graphql/mutations";
import { useAuthStorage } from "../contexts/AuthStorageContext";

export const useLogin = setUser => {
  const [result, login] = useMutation(Login);
  const authStorage = useAuthStorage();

  const tryLogin = async input => {
    try {
      const { data } = await login({ input });
      const {
        login: { errors, token, user },
      } = data;

      if (errors) alert(errors.message);
      else {
        authStorage.setAccessToken(token);
        setUser({
          token,
          user,
        });
      }
    } catch (e) {
      console.error(e);
      console.log("------------gql error-----------\n", result.error);
    }
  };

  return [result, tryLogin];
};
