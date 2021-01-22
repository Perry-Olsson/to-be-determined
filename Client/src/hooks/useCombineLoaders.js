import { useEffect } from "react";
import { useLoadingDispatch } from "../contexts/LoadingIcon";

export const useCombineLoaders = (loaderOne, loaderTwo, errors, payload) => {
  const dispatch = useLoadingDispatch();

  useEffect(() => {
    if (loaderOne) dispatch({ type: "loading", payload });
    else if (errors) dispatch({ type: "done", payload });
  }, [loaderOne]);

  useEffect(() => {
    if (!loaderTwo) dispatch({ type: "done", payload });
  }, [loaderTwo]);
};
