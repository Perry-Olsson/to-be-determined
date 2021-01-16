import { useHistory } from "react-router-native";

export const useNext = route => {
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
