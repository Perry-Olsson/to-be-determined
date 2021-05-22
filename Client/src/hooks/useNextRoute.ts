import { useHistory } from "react-router-native";

export const useNextRoute = (route: string) => {
  const history = useHistory();

  return route
    ? () => {
        history.push(route);
      }
    : (route: string) => {
        history.push(route);
      };
};
