import { Column } from "./Column";

export type Kanban = {
  id: string;
  name: string;
  columns: Column[];
};
