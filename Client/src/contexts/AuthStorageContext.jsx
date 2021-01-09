import React, { createContext, useContext } from "react";

const Context = createContext();

const AuthStorageProvider = ({ children, value }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAuthStorage = () => {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error(
      "auth storage must be called within an auth storage provider"
    );
  return context;
};

export default AuthStorageProvider;
