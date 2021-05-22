import { useLoading } from "./useLoading";
import { useMeQuery } from "../generated/graphql";

export const useAuthorizedUserQuery = () => {
  const { data, loading, error, refetch } = useMeQuery();

  useLoading(loading, "ME");

  return { user: data ? data.me : undefined, loading, error, refetch };
};
