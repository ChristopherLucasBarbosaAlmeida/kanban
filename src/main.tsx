import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base.scss";
import { KanbanContextProvider } from "./context/Kanban.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KanbanContextProvider>
      <RouterProvider router={router} />
    </KanbanContextProvider>
  </React.StrictMode>
);
