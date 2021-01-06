import { LoginResponse } from "../../../modules/user/types";
import { FieldError } from "../../../types";

export const loginError: LoginResponse = {
  errors: [
    {
      message: "Invalid email or password",
    },
  ],
};

export const usernameLengthError: FieldError = {
  field: "username",
  message: "Your username must be longer than 2 characters",
};

export const duplicateEmailError: FieldError = {
  field: "email",
  message: "That email is already associated with an account.",
};

export const duplicateUsernameError: FieldError = {
  field: "username",
  message: "That username is already taken",
};

export const invalidEmailError: FieldError = {
  field: "email",
  message: "Email provided is not valid",
};