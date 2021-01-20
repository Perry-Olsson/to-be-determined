import { User } from "../../../../entities";

export const getConfirmationHTML = (user: User, url: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Account Confirmation</title>
        <meta name="description" content="Friday email confirmation">
        <meta name="author" content="Friday">
      </head>
      <body>
        <h1>Hello ${user.firstName} ${user.lastName}, Welcome to Friday!</h1>
        <h3>Click the link to confirm your account</h3>
        <p>
          <a href="${url}">${url}</a>
        </p>
      </body>
    </html>
`;
};
