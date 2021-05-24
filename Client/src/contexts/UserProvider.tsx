import React, { FC } from "react";
import { User } from "../generated/graphql";

const UserStateContext = React.createContext<User | undefined>(undefined);

export const UserProvider: FC<{ user: User }> = ({ children, user }) => {
  return (
    <UserStateContext.Provider value={user}>
      {children}
    </UserStateContext.Provider>
  );
};

export const useGetUser = (): User => {
  const user = React.useContext(UserStateContext);

  if (user === undefined)
    throw Error("useGetUser must be called within UserProvider");

  return user;
};
