import jwt from "jsonwebtoken";
import config from "../../config";

export default (email: string): string => {
  const token = jwt.sign({ email }, config.jwtConfirmationSecret);
  return `${config.confirmationUrl}/${token}`;
};
