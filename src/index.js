import React from "react";
import ReactDOM from "react-dom/client";
import "./frontend/styles/global.css";
import { App } from "./frontend/components";
import { BrowserRouter } from "react-router-dom";
import { store } from "../src/frontend/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> - causes components to mount twice in dev
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
