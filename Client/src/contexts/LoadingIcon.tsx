import React, { createContext, FC, useContext, useReducer } from "react";

const LoadingStateContext = createContext<string[]>([]);
const LoadingDispatchContext =
  createContext<React.Dispatch<any> | undefined>(undefined);

function loadingReducer(
  state: string[],
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case "loading": {
      return [...state, action.payload];
    }
    case "done": {
      return state.filter((payload) => payload !== action.payload);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
const LoadingProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(loadingReducer, []);
  return (
    <LoadingStateContext.Provider value={state}>
      <LoadingDispatchContext.Provider value={dispatch}>
        {children}
      </LoadingDispatchContext.Provider>
    </LoadingStateContext.Provider>
  );
};

const useLoadingState = () => {
  const context = useContext(LoadingStateContext);
  if (context === undefined) {
    throw new Error("useLoadingState must be called within its provider");
  }
  return context;
};

const useLoadingDispatch = () => {
  const context = useContext(LoadingDispatchContext);
  if (context === undefined) {
    throw new Error("useLoadingDispatch must be called within its provider");
  }
  return context;
};

export { LoadingProvider, useLoadingDispatch, useLoadingState };
