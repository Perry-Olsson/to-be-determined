import express from "express";

import { User } from "../../entities";
import { UpdateResponse } from "../../repositories/user/types";
import { decodeConfirmationToken } from "../../utils/authorization";
import { getEntityManager } from "../../utils/getEntityManager";
import {
  getConfirmedHTML,
  getUnconfirmedHTML,
} from "../../utils/mail/pages/confirmation";
import { pubSub } from "../../index";

export const ConfirmationRoute = express.Router();

ConfirmationRoute.get("/:id", async (req, res) => {
  const { email, error } = decodeConfirmationToken(req.params.id);

  if (email) {
    const isConfirmed = await confirmUser(email);
    pubSub.publish(email, true);
    const html = getHTML(isConfirmed);
    return res.send(html);
  }
  return res.send(getUnconfirmedHTML({ error }));
});

const confirmUser = async (email: string) => {
  try {
    const repo = getEntityManager().getRepository(User);
    return await repo.updateUser(email, (user) => (user.confirmed = true));
  } catch (e) {
    return { error: e.message, user: null };
  }
};

const getHTML = ({ user, error }: UpdateResponse) => {
  if (user) return getConfirmedHTML(user);
  else return getUnconfirmedHTML(error ? { error: error.message } : {});
};
