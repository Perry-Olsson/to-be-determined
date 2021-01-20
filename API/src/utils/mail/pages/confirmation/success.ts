import { User } from "../../../../entities";

export const getSuccessHTML = ({ firstName }: User): string => {
  return `
    <!DOCTYPE html>
      <head>
        <meta charset="utf-8">
        <title>Conrimation Success</title>
        <meta name="description" content="Successful email confirmation">
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
            <h1>Success!</h1>
            <h3>Your account has been confirmed ${firstName}.</h3>
            <h3>You can close this tab</h3>
          </div>
        </body>
      </html>
  `;
};
