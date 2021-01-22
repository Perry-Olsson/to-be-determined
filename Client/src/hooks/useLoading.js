import { useEffect } from "react";
import { useLoadingDispatch } from "../contexts/LoadingIcon";

export const useLoading = loading => {
  const dispatch = useLoadingDispatch();

  useEffect(() => {
    dispatch({ type: loading ? "loading" : "done" });
  }, [loading]);
};
