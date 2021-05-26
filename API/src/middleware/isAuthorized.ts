import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";
import { decodeToken, getToken } from "../utils/authorization";
import { User } from "../entities";

export const isAuthorized: MiddlewareFn<MyContext> = async (
  { context: { req, em } },
  next
) => {
  try {
    const token = getToken(req);
    const { email, error } = decodeToken(token);
    if (error) {
      console.log("hello");
      return { errors: [{ message: error }] };
    }
    const user = await em.findOne(User, { email });
    if (!user)
      return {
        errors: [
          {
            message:
              "No user associated with your session, try logging in again.",
          },
        ],
      };
    req.user = user;
    return next();
  } catch (e) {
    return {
      errors: {
        message: "Must be logged in",
      },
    };
  }
};
