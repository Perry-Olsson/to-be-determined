import { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { useLoadingDispatch } from "../contexts/LoadingIcon";
import { ME } from "../graphql/queries";

export const useAuthorizedUserQuery = () => {
  const { data, loading, error, refetch } = useQuery(ME);
  const dispatch = useLoadingDispatch();

  useEffect(() => {
    dispatch({ type: loading ? "loading" : "done" });
  }, [loading]);

  return { user: data ? data.me : undefined, loading, error, refetch };
};
