import { RegisterInput } from "../../../modules/user/register/RegisterInput";
import { validator } from "../../../types";
import { FieldError } from "../../../types";
import { ValidatorArray } from "../types";
import { UserRepository } from "../UserRepository";
import isEmailAndUsernameValid from "./isEmailAndUsernameValid";
import isPasswordValid from "./isPasswordValid";

const validateRegistration = async (
  data: RegisterInput,
  repo: UserRepository
): Promise<FieldError[]> => {
  const validators: ValidatorArray<validator<FieldError>> = await runValidators(
    data,
    repo
  );
  const errors = validators.filter<FieldError>(isError => isError);

  return errors;
};

const runValidators = async (
  { email, username, password }: RegisterInput,
  repo: UserRepository
) => {
  const validators = await isEmailAndUsernameValid({ email, username, repo });
  validators.push(isPasswordValid(password));
  return validators;
};

export default validateRegistration;
