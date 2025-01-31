import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "antd";
import "./index.css";
import Router from "./Router/Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App>
      <Router />
    </App>
  </React.StrictMode>
);
