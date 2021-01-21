import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export default async function createTestTransporter(): Promise<Mail> {
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
}
