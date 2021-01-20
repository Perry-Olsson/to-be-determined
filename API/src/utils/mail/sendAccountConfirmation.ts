import { __prod__ } from "../../constants";

import { User } from "../../entities";
import { useTestMailer } from "./useTestMailer";

export const sendAccountConfirmation = async (user: User): Promise<void> => {
  if (!__prod__) useTestMailer(user);
};
