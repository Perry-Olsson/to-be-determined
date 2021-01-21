import { __prod__ } from "../../../constants";
import createUrl from "./createUrl";

import { User } from "../../../entities";
import { useTestMailer } from "../utils/useTestMailer";
import createEmail from "./createEmail";

export const sendAccountConfirmation = async (user: User): Promise<void> => {
  if (!__prod__) {
    const url = createUrl(user.email);
    useTestMailer(createEmail(user, url));
  }
};

export * from "./createEmail";
export * from "./createUrl";
