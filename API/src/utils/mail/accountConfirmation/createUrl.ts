import jwt from "jsonwebtoken";
import config from "../../config";

export default (email: string): string => {
  const token = jwt.sign({ email }, config.jwtSecret);
  return `http://localhost:4000/user/confirm/${token}`;
};
