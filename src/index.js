import "./styles.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./data";
import Movies from "./components/Movies";
import LikeList from "./components/LikeList";

const root = document.getElementById("app");

const App = props => {
  return (
    <Provider store={store}>
      <Movies />
      <hr></hr>
      <LikeList/>
    </Provider>
  );
};

render(<App />, root);
