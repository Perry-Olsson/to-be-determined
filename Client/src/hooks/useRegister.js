import { useMutation } from "@apollo/client";

import { REGISTER } from "../graphql/mutations";
import logGqlError from "../utils/logGqlError";

export const useRegister = () => {
  const [register, result] = useMutation(REGISTER);

  const tryRegister = async input => {
    try {
      const { data } = await register({ variables: { input } });
      const {
        register: { errors, user },
      } = data;

      if (errors) {
        alert(errors.reduce((acc, { message }) => `${acc}\n${message}`, ""));
      } else return user;
    } catch (e) {
      console.log(e);
      logGqlError(result.error);
    }
  };

  return [tryRegister, result];
};
