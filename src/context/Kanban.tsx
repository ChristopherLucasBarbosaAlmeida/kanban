import { ReactNode, createContext, useState } from "react";
import data from "../../db.json";
import { Kanban } from "../types/Kanban";

type Props = {
  children: ReactNode;
};

type KanbanProps = {
  kanban: Kanban[];
  setKanban: (state: Kanban[]) => void;
};

export const KanbanContext = createContext<KanbanProps>({} as KanbanProps);

export function KanbanContextProvider(props: Props) {
  const { children } = props;
  const [kanban, setKanban] = useState<Kanban[]>(data as Kanban[]);

  return (
    <KanbanContext.Provider value={{ kanban, setKanban }}>
      {children}
    </KanbanContext.Provider>
  );
}
