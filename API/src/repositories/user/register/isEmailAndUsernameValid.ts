import { QueryBuilder } from "@mikro-orm/postgresql";
import { User } from "../../../entities";
import { FieldError } from "../../../types";

const isEmailAndUsernameValid = async (
  email: string,
  username: string,
  qb: QueryBuilder<User>
): Promise<Array<FieldError | false>> => {
  qb.select("*")
    .where({ email: email.toLowerCase() })
    .orWhere({ username: username.toLowerCase() });

  const users: User[] = await qb.execute();

  if (users) {
    const errors = getErrors(email, username, users);

    return errors;
  }
  return [false];
};

const getErrors = (
  email: string,
  username: string,
  users: User[]
): FieldError[] => {
  const errors: FieldError[] = [];
  users.forEach(user => {
    if (email === user.email)
      errors.push({
        field: "email",
        message: "That email is already associated with an account.",
      });
    if (username === user.username)
      errors.push({
        field: "username",
        message: "That username is already taken",
      });
  });
  if (username.length <= 2)
    errors.push({
      field: "username",
      message: "Your username must be longer than 2 characters",
    });
  return errors;
};

export default isEmailAndUsernameValid;
