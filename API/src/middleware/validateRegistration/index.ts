import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../../types";
import isEmailAndUsernameValid from "./isEmailAndUsernameValid";
import isPasswordValid from "./isPasswordValid";

const validateRegistration: MiddlewareFn<MyContext> = async (
  {
    args: {
      data: { email, username, password },
    },
    context,
  },
  next
) => {
  const emailAndUsername = await isEmailAndUsernameValid(
    email,
    username,
    context
  );
  const validators = [...emailAndUsername, isPasswordValid(password)];

  const errors = validators.filter(isInValid => isInValid);

  if (errors.length)
    return {
      errors,
    };

  return next();
};

export default validateRegistration;
