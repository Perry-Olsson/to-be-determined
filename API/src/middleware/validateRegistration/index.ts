import { FieldError } from "../../types/graphql/Errors";
import { RegisterInput } from "../../modules/user/register/RegisterInput";
import { MyContext, validator } from "../../types";
import isEmailAndUsernameValid from "./isEmailAndUsernameValid";
import isPasswordValid from "./isPasswordValid";
import { UserResponse } from "../../modules/user/register/UserResponse";

const validateRegistration = async (
  data: RegisterInput,
  context: MyContext
): Promise<UserResponse> => {
  const validators: Array<validator<FieldError>> = await runValidators(
    data,
    context
  );
  const errors = validators.filter<FieldError>(isError => isError);

  if (errors.length)
    return {
      errors,
    };
  return {};
};

const runValidators = async (
  { email, username, password }: RegisterInput,
  ctx: MyContext
) => {
  const validators = await isEmailAndUsernameValid(email, username, ctx);
  validators.push(isPasswordValid(password));
  return validators;
};

interface Array<T> {
  filter<U extends T>(pred: (a: T) => T): U[];
}

export default validateRegistration;
