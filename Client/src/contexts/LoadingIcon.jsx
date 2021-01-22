import React, { createContext, useContext, useReducer } from "react";

const LoadingStateContext = createContext();
const LoadingDispatchContext = createContext();

function loadingReducer(state, action) {
  switch (action.type) {
    case "loading": {
      return [...state, action.payload];
    }
    case "done": {
      return state.slice(1, -1);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function LoadingProvider({ children }) {
  const [state, dispatch] = useReducer(loadingReducer, []);
  return (
    <LoadingStateContext.Provider value={state}>
      <LoadingDispatchContext.Provider value={dispatch}>
        {children}
      </LoadingDispatchContext.Provider>
    </LoadingStateContext.Provider>
  );
}

const useLoadingState = () => {
  const context = useContext(LoadingStateContext);
  if (context === undefined) {
    throw new Error("useLoadingState must be called within its provider");
  }
  return context.length;
};

const useLoadingDispatch = () => {
  const context = useContext(LoadingDispatchContext);
  if (context === undefined) {
    throw new Error("useLoadingDispatch must be called within its provider");
  }
  return context;
};

export { LoadingProvider, useLoadingDispatch, useLoadingState };
