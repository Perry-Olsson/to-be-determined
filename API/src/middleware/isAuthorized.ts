import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";
import jwt from "jsonwebtoken";
import { getToken } from "../utils/authorization";

export const isAuthorized = (action: string): MiddlewareFn<MyContext> => {
  return async ({ context: { req } }, next) => {
    try {
      jwt.verify(getToken(req), "secret");
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
