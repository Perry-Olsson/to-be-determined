import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env") });

export default {
  port: Number(process.env.PORT),
  jwtSecret: process.env.SECRET,
  jwtConfirmationSecret: process.env.CONFIRMATION_SECRET,
  databaseUrl: process.env.DATABASE_URL,
  slowInternet: process.env.SLOW_INTERNET,
  smtpLogin: process.env.SMTP_LOGIN,
  smtpPassword: process.env.SMTP_PASSWORD,
} as Config;

interface Config {
  port: number;
  jwtSecret: string;
  jwtConfirmationSecret: string;
  databaseUrl: string;
  slowInternet: boolean | undefined;
  smtpLogin: string;
  smtpPassword: string;
}
