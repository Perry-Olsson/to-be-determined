import { FieldError } from "../../../types";

function isPasswordValid(password: string): FieldError | false {
  if (password.length < 6)
    return {
      field: "password",
      message: "Password must be longer than 5 characters",
    };
  return false;
}

export default isPasswordValid;