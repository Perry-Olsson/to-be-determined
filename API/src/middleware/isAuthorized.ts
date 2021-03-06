import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";
import { decodeToken, getToken } from "../utils/authorization";
import { User } from "../entities";

interface Options {
  populate?: string[];
  intercept?: boolean;
  checkConfirmation?: boolean;
}

export const isAuthorized = (
  { populate, intercept, checkConfirmation }: Options = {
    populate: [],
    intercept: true,
    checkConfirmation: true,
  }
): MiddlewareFn<MyContext> => {
  return async ({ context: { req, em } }, next) => {
    const errors = [];
    try {
      const token = getToken(req);
      const { email, error } = decodeToken(token);
      if (error) {
        errors.push({ message: error });
      }

      if (!errors.length) {
        const user = await em.findOne(User, { email }, populate);
        if (!user)
          errors.push({
            message:
              "No user associated with your session, try logging in again.",
          });
        else if (checkConfirmation && !user.confirmed)
          errors.push({
            message: "You must confirm your account first",
          });
        else req.user = user;
      }

      if (errors.length && intercept) return { errors };
      return next();
    } catch (e) {
      return {
        errors: {
          message: "Must be logged in",
        },
      };
    }
  };
};
// export const isAuthorized: MiddlewareFn<MyContext> = async (
//   { context: { req, em } },
//   next
// ) => {
//   try {
//     const token = getToken(req);
//     const { email, error } = decodeToken(token);
//     if (error) {
//       return { errors: [{ message: error }] };
//     }
//     const user = await em.findOne(User, { email });
//     if (!user)
//       return {
//         errors: [
//           {
//             message:
//               "No user associated with your session, try logging in again.",
//           },
//         ],
//       };
//     req.user = user;
//     return next();
//   } catch (e) {
//     return {
//       errors: {
//         message: "Must be logged in",
//       },
//     };
//   }
// };
