import { validate } from "email-validator";

const validateEmail = (email: string): boolean => {
  return validate(email);
};

export default validateEmail;
