import express from "express";

import { User } from "../../entities";
import { UpdateResponse } from "../../repositories/user/types";
import { getDecodedToken } from "../../utils/authorization";
import { getEntityManager } from "../../utils/getEntityManager";
import { getFailureHTML } from "../../utils/mail/pages/confirmation";
import { getSuccessHTML } from "../../utils/mail/pages/confirmation";

export const ConfirmationRoute = express.Router();

ConfirmationRoute.get("/:id", async (req, res) => {
  const { email, error } = getDecodedToken(req.params.id);

  if (email) {
    const isConfirmed = await confirmUser(email);
    const html = getHTML(isConfirmed);
    return res.send(html);
  }
  return res.send(getFailureHTML({ error }));
});

const confirmUser = async (email: string) => {
  try {
    const repo = getEntityManager().getRepository(User);
    return await repo.updateUser(email, user => (user.confirmed = true));
  } catch (e) {
    return { error: e.message, user: null };
  }
};

const getHTML = ({ user, error }: UpdateResponse) => {
  if (user) return getSuccessHTML(user);
  else return getFailureHTML(error ? { error: error.message } : {});
};
