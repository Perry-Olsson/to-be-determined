import { User } from "../../../entities";
import isValidEmail from "../../../utils/validateEmail";
import { FieldError } from "../../../types";
import {
  duplicateEmailError,
  duplicateUsernameError,
  invalidEmailError,
  usernameLengthError,
  ValidationInput,
} from "../types";
import { lowerCaseUsername } from "../../../constants";

const isEmailAndUsernameValid = async (
  input: ValidationInput
): Promise<Array<FieldError | false>> => {
  if (!isValidEmail(input.email)) return [invalidEmailError];

  return validateUniqueConstraints(input);
};

const validateUniqueConstraints = async (
  input: ValidationInput
): Promise<Array<FieldError | false>> => {
  const users = await getUsers(input);

  if (users) {
    const { email, username } = input;
    const errors = getErrors(email, username, users);

    return errors;
  }
  return [false];
};

const getUsers = async ({
  email,
  username,
  repo,
}: ValidationInput): Promise<User[]> => {
  return await repo.find({
    $or: [{ email }, { [lowerCaseUsername]: username.toLowerCase() }],
  });
};

const getErrors = (
  email: string,
  username: string,
  users: User[]
): FieldError[] => {
  const errors: FieldError[] = [];

  users.forEach(user => {
    if (email === user.email) errors.push(duplicateEmailError);
    if (username.toLowerCase() === user.username.toLowerCase())
      errors.push(duplicateUsernameError);
  });

  if (username.length < 3) errors.push(usernameLengthError);
  return errors;
};

export default isEmailAndUsernameValid;
