import jwt from "jsonwebtoken";
import { Request } from "express";

import config from "../config";
import { DecodedToken } from "../../types";

export const getToken = (req: Request): string => {
  return req.headers.authorization ? req.headers.authorization.substr(7) : "";
};

export const getDecodedToken = (token: string): DecodedToken => {
  try {
    const decodedToken = jwt.verify(token, config.jwtSecret) as DecodedToken;

    return { ...decodedToken, error: "" };
  } catch (e) {
    return { email: "", error: e.message };
  }
};
