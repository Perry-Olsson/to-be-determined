import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";
import jwt from "jsonwebtoken";
import { getToken } from "../utils/authorization";
import config from "../utils/config";

export const isAuthorized = (action: string): MiddlewareFn<MyContext> => {
  return async ({ context: { req } }, next) => {
    try {
      jwt.verify(getToken(req), config.jwtSecret);
      return next();
    } catch (e) {
      return {
        errors: {
          action,
          message: "Must be logged in",
        },
      };
    }
  };
};
