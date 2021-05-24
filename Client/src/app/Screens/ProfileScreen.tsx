import React, { FC } from "react";
import { Unconfirmed } from "./Unconfirmed";
import { Profile } from "../Profile";
import { useGetUser } from "../../contexts";

export const ProfileScreen: FC = () => {
  const user = useGetUser();
  if (!user.confirmed) return <Unconfirmed user={user} />;

  return <Profile />;
};
