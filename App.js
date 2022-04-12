import React from "react";
import { Provider } from "react-redux";
import Main from "./components/Main";
import AppStore from "./redux/store/AppStore";

export default function App() {
  return (
    <Provider store={AppStore}>
      <Main />
    </Provider>
  );
}
