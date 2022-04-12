import React from "react";
import AppContext from "../contexts/AppContext";

export default function AppProvider({ value, children }) {
   const [state, setState] = React.useState({ ...value });

   React.useEffect(function () {
      setContextState(value);
   }, []);

   const setContextState = React.useCallback(
      newState => setState({ ...state, ...newState }),
      []
   )

   const getContextState = React.useCallback(
      () => ({
         state: state,
         setState: setContextState
      }), [state, setState]
   )

   return (
      <AppContext.Provider value={ getContextState() }>
         { children }
      </AppContext.Provider>
   )
}