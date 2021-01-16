import { useQuery } from "@apollo/client";

import { ME } from "../graphql/queries";

export const useAuthorizedUserQuery = () => {
  const { data, loading, refetch } = useQuery(ME);

  return { user: data ? data.me : undefined, loading, refetch };
};
