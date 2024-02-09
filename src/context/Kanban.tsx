import { ReactNode, createContext, useState } from "react";
import data from "../../db.json";

type Props = {
  children: ReactNode;
};

export const KanbanContext = createContext(data);

export function KanbanContextProvider(props: Props) {
  const { children } = props;
  const [kanban, setKanban] = useState(data);

  return (
    <KanbanContext.Provider value={kanban}>{children}</KanbanContext.Provider>
  );
}
