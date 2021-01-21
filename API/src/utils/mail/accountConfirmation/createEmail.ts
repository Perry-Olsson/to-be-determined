import { User } from "../../../entities";
import { getConfirmationHTML } from "../pages/confirmation";
import { ConfirmationEmail } from "../types";

export default (user: User, url: string): ConfirmationEmail => {
  return {
    from: "'Friday' <friday@gmail.com>",
    to: user.email,
    subject: "Account confirmation",
    html: getConfirmationHTML(user, url),
  };
};
