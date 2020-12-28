import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { User } from "../../../../src/entities";

@ValidatorConstraint({ async: true })
export class Email implements ValidatorConstraintInterface {
  validate(email: string): Promise<boolean> {
    return User.findOne({ email }).then(user => {
      if (user) return false;
      return true;
    });
  }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line
  return function (object: Object, propertyName: string): void {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: Email,
    });
  };
}
