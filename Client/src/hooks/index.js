import { useHistory } from "react-router-native";

export const useNextRoute = route => {
  const history = useHistory();

  return route
    ? () => {
        history.push(route);
      }
    : route => {
        history.push(route);
      };
};

export * from "./useLogin";
export * from "./useAuthorizedUserQuery";
export * from "./useRegister";
export * from "./useCombineLoaders";
