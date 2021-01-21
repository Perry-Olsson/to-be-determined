import jwt from "jsonwebtoken";

import config from "../config";
import { DecodedToken } from "../../types";

export const decodeToken = (token: string): DecodedToken => {
  try {
    const decodedToken = jwt.verify(token, config.jwtSecret) as DecodedToken;

    return { ...decodedToken, error: "" };
  } catch (e) {
    return { email: "", error: e.message };
  }
};
