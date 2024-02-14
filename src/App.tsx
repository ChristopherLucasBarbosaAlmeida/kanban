import { Column, CreateNewTaskModal } from "./components";
import { Layout } from "./layout";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { useContext, useState } from "react";
import { KanbanContext } from "./context/Kanban";

export function App() {
  const [showCreateNewTaskModal, setShowCreateNewTaskModal] = useState(false);

  function handleShowCreateNewTaskModal() {
    setShowCreateNewTaskModal((prev) => !prev);
  }

  const { kanban } = useContext(KanbanContext);

  const columns = kanban.flatMap((c) => c.columns)

  return (
    <>
      <Layout onClick={handleShowCreateNewTaskModal}>
        <DndContext collisionDetection={closestCorners}>
          {columns.map((column) =>
            <Column {...column} key={column.id} />
          )}
        </DndContext>
      </Layout>
      <CreateNewTaskModal
        showCreateNewTaskModal={showCreateNewTaskModal}
        handleClickModalBackground={handleShowCreateNewTaskModal}
      />
    </>
  );
}
