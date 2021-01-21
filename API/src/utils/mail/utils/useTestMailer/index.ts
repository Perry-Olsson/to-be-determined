import nodemailer from "nodemailer";
import { sendMail } from "../sendMail";

import { Email, SMTPMailResponse } from "../../types";
import createTestTransporter from "./createTestTransporter";

export const useTestMailer = async (email: Email): Promise<void> => {
  try {
    const transporter = await createTestTransporter();

    const info = await sendMail<SMTPMailResponse>(transporter, email);

    console.log(`Message sent: ${info.messageId}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  } catch (e) {
    console.error(e);
  }
};
