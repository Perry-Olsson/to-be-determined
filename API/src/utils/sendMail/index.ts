import nodemailer from "nodemailer";

import { User } from "../../entities";
import { createConfirmationUrl } from "./createConfirmationUrl";
import { getConfirmationHTML } from "./pages";

export const sendAccountConfirmation = async (user: User): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "rocio12@ethereal.email",
      pass: "3ZUczHQmyAUenPwdJ5",
    },
  });

  const url = createConfirmationUrl(user.email);

  const info = await transporter.sendMail({
    from: "'Friday' <friday@gmail.com>",
    to: user.email,
    subject: "Account confirmation",
    html: getConfirmationHTML(user, url),
  });

  console.log(info);
};
