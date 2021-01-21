import { useQuery } from "@apollo/client";

import { ME } from "../graphql/queries";

export const useAuthorizedUserQuery = () => {
  const { data, loading, error, refetch } = useQuery(ME);

  return { user: data ? data.me : undefined, loading, error, refetch };
};
