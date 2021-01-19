import express from "express";

import { User } from "../../entities";
import { getDecodedToken } from "../../utils/authorization";
import { getEntityManager } from "../../utils/getEntityManager";
import { getFailureHTML } from "../../utils/sendMail/pages";
import { getSuccessHTML } from "../../utils/sendMail/pages";

export const ConfirmationRoute = express.Router();

ConfirmationRoute.get("/:id", async (req, res) => {
  const { email, error } = getDecodedToken(req.params.id);

  if (email) {
    const response = await updateAndFlush(email);
    return res.send(response);
  }
  return res.send(getFailureHTML(null, error));
});

const updateAndFlush = async (email: string) => {
  const repo = getEntityManager().getRepository(User);
  try {
    const user = await repo.getUser(email);
    if (user) {
      user.confirmed = true;
      await repo.flush();
      return getSuccessHTML(user);
    }
    return getFailureHTML(user);
  } catch (e) {
    return getFailureHTML(null, e.message);
  }
};
