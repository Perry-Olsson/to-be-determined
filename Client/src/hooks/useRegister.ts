import logGqlError from "../utils/logGqlError";
import { useLoading } from "./useLoading";
import {
  BaseError,
  FieldError,
  Maybe,
  RegisterMutation,
  User,
  useRegisterMutation,
} from "../generated/graphql";
import { RegisterValues } from "../app/Register/Body";
import { MutationResult } from "@apollo/client";

export const useRegister = (): [
  TryRegister,
  MutationResult<RegisterMutation>
] => {
  const [register, result] = useRegisterMutation();

  useLoading(result.loading, "REGISTER");

  const tryRegister = async ({
    firstName,
    lastName,
    username,
    email,
    password,
  }: RegisterValues) => {
    try {
      const { data } = await register({
        variables: {
          input: { firstName, lastName, username, email, password },
        },
      });
      if (data) {
        const {
          register: { errors, user },
        } = data;

        if (errors) {
          alert(formatFieldError(errors));
        } else return user;
      }
    } catch (e) {
      console.log(e);
      logGqlError(result.error);
    }
  };

  return [tryRegister, result];
};

export const formatFieldError = (
  errors: Pick<FieldError, "field" | "message">[]
) => {
  return errors.reduce((acc, { message }) => `${acc}\n${message}`, "");
};

export const formatError = (errors: BaseError[]) => {
  return errors.reduce((acc, { message }) => `${acc}\n${message}`, "");
};

type TryRegister = ({
  firstName,
  lastName,
  username,
  email,
  password,
}: RegisterValues) => Promise<
  | Maybe<
      {
        __typename?: "User" | undefined;
      } & Pick<User, "username" | "email" | "id">
    >
  | undefined
>;
