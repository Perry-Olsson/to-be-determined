import { User } from "../../../entities";

export const getConfirmationHTML = (user: User, url: string): string => {
  return `
    <h1>Hello ${user.firstName} ${user.lastName}!</h1>
    <h3>Click the link to confirm your account</h3>
    <p><a href="${url}">${url}</a></p>
    `;
};
