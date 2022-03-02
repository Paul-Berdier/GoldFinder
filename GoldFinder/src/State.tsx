
import React, { createContext, useEffect, useReducer } from "react";
import reducer, { initialState } from "./reducer";

const persistedState = localStorage.getItem("persistedState")
  ? JSON.parse(window.localStorage["persistedState"])
  : undefined;

let AppContext = createContext(initialState as any);

function AppContextProvider(props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  const fullInitialState = {
    ...initialState,
    ...persistedState
  };

  let [state, dispatch] = useReducer(reducer, fullInitialState);
  let value = { state, dispatch };

  useEffect(() => {
    window.localStorage["persistedState"] = JSON.stringify({
      profil: state.profil,
      email: state.email,
    });
  }, [state]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
