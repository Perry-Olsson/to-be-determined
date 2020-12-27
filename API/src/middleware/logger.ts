import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types";

export const log: MiddlewareFn<MyContext> = async ({ args }, next) => {
  console.log(args);
  return next();
};
