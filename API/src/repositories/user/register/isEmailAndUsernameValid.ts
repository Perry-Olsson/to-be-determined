import { User } from "../../../entities";
import { validate } from "email-validator";
import { FieldError } from "../../../types";
import {
  duplicateEmailError,
  duplicateUsernameError,
  invalidAtSymbolError,
  invalidEmailError,
  usernameLengthError,
  ValidationInput,
} from "../types";

const isEmailAndUsernameValid = async (
  input: ValidationInput
): Promise<Array<FieldError | false>> => {
  if (!validate(input.email)) return [invalidEmailError];
  const errors = validateUsername(input.username);
  return errors.concat(await validateUniqueConstraints(input));
};

const validateUsername = (username: string): Array<FieldError | false> => {
  const errors = [];
  if (username.length < 3) errors.push(usernameLengthError);
  if (username.includes("@")) errors.push(invalidAtSymbolError);
  return errors;
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
    $or: [{ email }, { username }],
  });
};

const getErrors = (
  email: string,
  username: string,
  users: User[]
): FieldError[] => {
  const errors: FieldError[] = [];

  users.forEach((user) => {
    if (email === user.email) errors.push(duplicateEmailError);
    if (username.toLowerCase() === user.username.toLowerCase())
      errors.push(duplicateUsernameError);
  });

  return errors;
};

export default isEmailAndUsernameValid;
