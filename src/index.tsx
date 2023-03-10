import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks");
  worker.start();
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
