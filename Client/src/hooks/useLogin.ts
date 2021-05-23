import { useApolloClient } from "@apollo/client";

import { useAuthStorage } from "../contexts/AuthStorageContext";
import { ME } from "../graphql/queries";
import { LoginInput, useLoginMutation, User } from "../generated/graphql";
import logGqlError from "../utils/logGqlError";
import { useLoading } from "./useLoading";

export const useLogin = () => {
  const client = useApolloClient();
  const [login, result] = useLoginMutation();
  const authStorage = useAuthStorage();

  useLoading(result.loading, "LOGIN");

  const tryLogin = async (input: LoginInput) => {
    try {
      const { data } = await login({ variables: { input } });

      if (data) {
        if (data.login.errors) alert(data.login.errors.message);
        else {
          client.writeQuery({
            query: ME,
            data: {
              me: {
                ...data.login.user,
              },
            },
          });
          await authStorage.setAccessToken(data.login.token);
        }
      }
    } catch (e) {
      console.error(e);
      logGqlError(result.error);
    }
  };

  return [tryLogin, result];
};
