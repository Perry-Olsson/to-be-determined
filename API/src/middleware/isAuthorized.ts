import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";
import jwt from "jsonwebtoken";
import { getToken } from "../utils/authorization";

export const isAuthorized: MiddlewareFn<MyContext> = async (
  { context: { req } },
  next
) => {
  try {
    const result = jwt.verify(getToken(req), "secret");
    console.log(result);
    return next();
  } catch (e) {
    throw new Error("Must be logged in");
  }
};
