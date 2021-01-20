import { User } from "../../../../entities";

export const getUnconfirmedHTML = ({ user, error }: Args): string => {
  console.log(error);
  const message: string = user
    ? `
    <h3>Looks like we recognize your account ${user.firstName}</h3>
    <h3>Try and resend the confirmation email</h3>
    <p><a href=http://localhost:4000/user/resend-confirmation>resend confirmation email</a></p>
  `
    : `
    <h3>We couldn't find and account assossciated with that link</h3>
    <h3>Your account has most likely expired.</h3>
  `;
  return `
    <!DOCTYPE html>
      <head>
        <meta charset="utf-8">
        <title>Conrimation Failure</title>
        <meta name="description" content="Failed email confirmation">
        <meta name="author" content="Friday">
        <style>
        div {
          text-align: center;
        }
        </style>
      </head>
      <html>
        <body>
          <div>
            <h1>Oops! something went wrong :(</h1>
            ${message}
          </div>
        </body>
      </html>
  `;
};

interface Args {
  user?: User;
  error?: string;
}
