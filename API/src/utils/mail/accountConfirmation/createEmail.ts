import { User } from "../../../entities";
import { getConfirmationHTML } from "../pages/confirmation";
import { ConfirmationEmail } from "../types";

export default (user: User, url: string): ConfirmationEmail => {
  return {
    from: "'todo' <todo.sample.app@mail.com>",
    to: user.email,
    subject: "Account confirmation",
    html: getConfirmationHTML(user, url),
  };
};
