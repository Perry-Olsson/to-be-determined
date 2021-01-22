import { useQuery } from "@apollo/client";

import { useLoading } from "./useLoading";
import { ME } from "../graphql/queries";

export const useAuthorizedUserQuery = () => {
  const { data, loading, error, refetch } = useQuery(ME);

  useLoading(loading, "ME");

  return { user: data ? data.me : undefined, loading, error, refetch };
};
