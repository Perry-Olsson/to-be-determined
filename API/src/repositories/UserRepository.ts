import { EntityRepository } from "@mikro-orm/postgresql";
import { User } from "../entities";
import { RegisterInput } from "../modules/user/register/RegisterInput";
import { UserResponse } from "../modules/user/register/UserResponse";
import { validator } from "../types";
import { FieldError } from "../types/graphql/FieldError";

export class UserRepository extends EntityRepository<User> {
  public async init(data: RegisterInput): Promise<UserResponse> {
    const formattedData = this.format(data);
    const errors = await this.validateRegistration(formattedData);

    if (!errors) return { user: this.create(formattedData) };

    return { errors };
  }

  private format(data: RegisterInput): RegisterInput {
    return {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      username: data.username.toLowerCase().trim(),
      email: data.email.toLowerCase().trim(),
      password: data.password,
    };
  }

  private async validateRegistration(
    data: RegisterInput
  ): Promise<FieldError[]> {
    const validators: ValidatorArray<
      validator<FieldError>
    > = await this.runValidators(data);
    const errors = validators.filter<FieldError>(isError => isError);

    return errors;
  }

  private async runValidators({ email, username, password }: RegisterInput) {
    const validators = await this.isEmailAndUsernameValid(email, username);
    validators.push(this.isPasswordValid(password));
    return validators;
  }

  private async isEmailAndUsernameValid(
    email: string,
    username: string
  ): Promise<Array<FieldError | false>> {
    const qb = this.createQueryBuilder();

    qb.select("*")
      .where({ email: email.toLowerCase() })
      .orWhere({ username: username.toLowerCase() });

    const users: User[] = await qb.execute();

    if (users) {
      const errors = this.getErrors(email, username, users);

      return errors;
    }
    return [false];
  }

  private getErrors(
    email: string,
    username: string,
    users: User[]
  ): FieldError[] {
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
  }

  private isPasswordValid(password: string): FieldError | false {
    if (password.length < 6)
      return {
        field: "password",
        message: "Password must be longer than 5 characters",
      };
    return false;
  }
}

interface ValidatorArray<T> {
  filter<U extends T>(pred: (a: T) => T): U[];
}
