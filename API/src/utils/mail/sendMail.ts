import Mail from "nodemailer/lib/mailer";

export async function sendMail<T>(
  transporter: Mail,
  mailOptions: Mail.Options
): Promise<T> {
  return await transporter.sendMail(mailOptions);
}
