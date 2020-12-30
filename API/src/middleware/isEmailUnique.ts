import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";
import { User } from "../entities";

export const isEmailUnique: MiddlewareFn<MyContext> = async (
  { args, context: { em } },
  next
) => {
  try {
    console.log(args);
    const user = em.findOne(User, { email: args.email });
    if (!user) throw new Error("Must be logged in");
    return next();
  } catch (e) {
    throw new Error("Must be logged in");
  }
};
