import { UniqueIdentifier } from "@dnd-kit/core";
import { Subtask } from "./Subtask";

export type Task = {
  id: UniqueIdentifier;
  title: string;
  description: string;
  subtasks: Subtask[];
};
