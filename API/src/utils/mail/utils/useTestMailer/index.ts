import nodemailer from "nodemailer";
import { sendMail } from "../sendMail";

import { Email, SMTPMailResponse } from "../../types";
import createTestTransporter from "./createTestTransporter";
import config from "../../../config";

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

export const useProdMailer = async (email: Email): Promise<void> => {
  try {
    const transporter = await createTransporter();

    const info = await sendMail<SMTPMailResponse>(transporter, email);

    console.log(info.response);
  } catch (e) {
    console.log(e);
  }
};

const createTransporter = async () => {
  return nodemailer.createTransport({
    host: "smtp.mail.com",
    port: 587,
    secure: false,
    auth: {
      user: config.smtpLogin,
      pass: config.smtpPassword,
    },
  });
};
