import jwt from "jsonwebtoken";
import config from "../../config";

export default (email: string): string => {
  const token = jwt.sign({ email }, config.jwtSecret);
  return `http://localhost:${config.port}/user/confirm/${token}`;
};
