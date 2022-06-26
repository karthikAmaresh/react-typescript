import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { quizStore} from "./store";

ReactDOM.render(
  <React.StrictMode>
      <Provider  store={quizStore}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
