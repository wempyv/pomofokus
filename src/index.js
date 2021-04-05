import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SettingContextProvider from "./context/SettingContext";

ReactDOM.render(
  <React.StrictMode>
    <SettingContextProvider>
      <App />
    </SettingContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
