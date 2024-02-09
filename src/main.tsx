import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./styles/base.scss";
import { KanbanContextProvider } from "./context/Kanban.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KanbanContextProvider>
      <App />
    </KanbanContextProvider>
  </React.StrictMode>
);
