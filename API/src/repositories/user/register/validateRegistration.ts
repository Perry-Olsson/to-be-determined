import { QueryBuilder } from "@mikro-orm/postgresql";
import { User } from "../../../entities";
import { RegisterInput } from "../../../modules/user/register/RegisterInput";
import { validator } from "../../../types";
import { FieldError } from "../../../types";
import isEmailAndUsernameValid from "./isEmailAndUsernameValid";
import isPasswordValid from "./isPasswordValid";

const validateRegistration = async (
  data: RegisterInput,
  qb: QueryBuilder<User>
): Promise<FieldError[]> => {
  const validators: ValidatorArray<validator<FieldError>> = await runValidators(
    data,
    qb
  );
  const errors = validators.filter<FieldError>(isError => isError);

  return errors;
};

const runValidators = async (
  { email, username, password }: RegisterInput,
  qb: QueryBuilder<User>
) => {
  const validators = await isEmailAndUsernameValid(email, username, qb);
  validators.push(isPasswordValid(password));
  return validators;
};

interface ValidatorArray<T> {
  filter<U extends T>(pred: (a: T) => T): U[];
}

export default validateRegistration;
