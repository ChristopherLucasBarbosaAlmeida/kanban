import { ReactNode, createContext, useState } from "react";
import data from "../../db.json";

type Props = {
  children: ReactNode;
};

type KanbanData = {
  id: string;
  name: string;
  columns: {
    id: string;
    name: string;
    tasks: {
      id: string;
      title: string;
      subtasks: { id: string; done: boolean; description: string }[];
    }[];
  }[];
};

type KanbanProps = {
  kanban: KanbanData[];
  setKanban: (state: KanbanData[]) => void;
};

export const KanbanContext = createContext<KanbanProps>(null);

export function KanbanContextProvider(props: Props) {
  const { children } = props;
  const [kanban, setKanban] = useState<KanbanData[]>(data);

  return (
    <KanbanContext.Provider value={{ kanban, setKanban }}>
      {children}
    </KanbanContext.Provider>
  );
}
