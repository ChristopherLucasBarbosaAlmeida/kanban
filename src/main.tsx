import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base.scss";
import { BoardContextProvider } from "./context/BoardContext.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BoardContextProvider>
      <RouterProvider router={router} />
    </BoardContextProvider>
  </React.StrictMode>
);
