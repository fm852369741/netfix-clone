import React from "react";

const AppContext = React.createContext({
   state: {},
   setState: () => {}
});

export default AppContext;