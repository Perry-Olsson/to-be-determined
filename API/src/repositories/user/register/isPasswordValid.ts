import { FieldError } from "../../../types";
import { passwordLenghError } from "../types";

function isPasswordValid(password: string): FieldError | false {
  if (password.length < 6) return passwordLenghError;
  return false;
}

export default isPasswordValid;
