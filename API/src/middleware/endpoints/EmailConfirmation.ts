import { RequestContext } from "@mikro-orm/core";
import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../../entities";

import config from "../../utils/config";
import { getFailureHTML } from "../../utils/sendMail/pages/failure";
import { getSuccessHTML } from "../../utils/sendMail/pages/success";

export const ConfirmationRoute = express.Router();

ConfirmationRoute.get("/:id", async (req, res) => {
  const em = RequestContext.getEntityManager();
  if (em) {
    try {
      const token = req.params.id;
      const email = jwt.verify(token, config.jwtSecret);
      const user = await em.findOne(User, { email });
      if (user) {
        try {
          user.confirmed = true;
          await em.flush();
          return res.send(getSuccessHTML(user));
        } catch (e) {
          return res.send(getFailureHTML(user));
        }
      }
      return res.send(getFailureHTML());
    } catch (e) {
      console.log(e);
      return res.send(getFailureHTML());
    }
  } else return res.end(getFailureHTML());
});
