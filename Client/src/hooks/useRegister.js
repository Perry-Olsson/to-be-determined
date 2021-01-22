import { useMutation } from "@apollo/client";

import { REGISTER } from "../graphql/mutations";
import logGqlError from "../utils/logGqlError";
import { useLoading } from "./useLoading";

export const useRegister = () => {
  const [register, result] = useMutation(REGISTER);

  useLoading(result.loading, "REGISTER");

  const tryRegister = async ({
    firstName,
    lastName,
    username,
    email,
    password,
  }) => {
    try {
      const { data } = await register({
        variables: {
          input: { firstName, lastName, username, email, password },
        },
      });
      const {
        register: { errors, user },
      } = data;

      if (errors) {
        alert(format(errors));
      } else return user;
    } catch (e) {
      console.log(e);
      logGqlError(result.error);
    }
  };

  return [tryRegister, result];
};

const format = errors => {
  return errors.reduce((acc, { message }) => `${acc}\n${message}`, "");
};
