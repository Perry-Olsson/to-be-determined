import { useMutation, useApolloClient } from "@apollo/client";

import { LOGIN } from "../graphql/mutations";
import { useAuthStorage } from "../contexts/AuthStorageContext";
import { ME } from "../graphql/queries";
import { useLoginMutation } from "../generated/graphql";
import logGqlError from "../utils/logGqlError";
import { useLoading } from "./useLoading";

export const useLogin = () => {
  const client = useApolloClient();
  const [login, result] = useLoginMutation();
  const authStorage = useAuthStorage();

  useLoading(result.loading, "LOGIN");

  const tryLogin = async (input) => {
    try {
      const { data } = await login({ variables: { input } });
      const {
        login: { errors, token, user },
      } = data;

      if (errors) alert(errors.message);
      else {
        writeMeQuery(client, user);
        await authStorage.setAccessToken(token);
      }
    } catch (e) {
      console.error(e);
      logGqlError(result.error);
    }
  };

  return [tryLogin, result];
};

const writeMeQuery = (client, user) => {
  client.writeQuery({
    query: ME,
    data: {
      me: {
        ...user,
      },
    },
  });
};
