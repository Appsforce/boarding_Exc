import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { productSlice } from "shared/api/productSlice";
import { store } from "shared/store";

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
    <Provider store={store}>
      <ApiProvider api={productSlice}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
