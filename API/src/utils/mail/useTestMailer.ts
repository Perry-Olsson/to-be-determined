import nodemailer from "nodemailer";
import { sendMail } from "./sendMail";
import { User } from "../../entities";
import { createConfirmationUrl } from "./createConfirmationUrl";
import { getConfirmationHTML } from "./pages/confirmation";
import { SMTPMailResponse } from "./types";

export const useTestMailer = async (user: User): Promise<void> => {
  try {
    const transporter = await createTestTransporter();

    const url = createConfirmationUrl(user.email);
    const email = {
      from: "'Friday' <friday@gmail.com>",
      to: user.email,
      subject: "Account confirmation",
      html: getConfirmationHTML(user, url),
    };

    const info = await sendMail<SMTPMailResponse>(transporter, email);

    console.log(`Message sent: ${info.messageId}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  } catch (e) {
    console.error(e);
  }
};

const createTestTransporter = async () => {
  const testAccount = await nodemailer.createTestAccount();

  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};
