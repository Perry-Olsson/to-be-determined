import { RegisterValues } from "../../Body";
import emailValidator from "email-validator";

export const validator = (values: RegisterValues) => {
  const errors: Errors = {};

  if (values.firstName.length === 0) errors.firstName = "Required";

  if (values.lastName.length === 0) errors.lastName = "Required";

  if (values.email.length === 0) errors.email = "Required";
  else if (!emailValidator.validate(values.email))
    errors.email = "Invalid email address";

  if (values.username.length === 0) errors.username = "Required";

  if (values.password.length === 0) errors.password = "Required";
  else if (values.password.length < 6)
    errors.password = "Password must be 6 characters";

  if (values.password !== values.passwordConfirmation)
    errors.passwordConfirmation = "passwords do not match";

  console.log(errors);

  return errors;
};

interface Errors {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  username?: string | null;
  password?: string | null;
  passwordConfirmation?: string | null;
}
