import { Request } from "express";

export const getToken = (req: Request): string => {
  return req.headers.authorization ? req.headers.authorization.substr(7) : "";
};
