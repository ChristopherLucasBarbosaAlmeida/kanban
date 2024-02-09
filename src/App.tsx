import { Column, CreateNewTaskModal } from "./components";
import data from "../db.json";
import { Layout } from "./layout";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { useState } from "react";

export function App() {
  const [showCreateNewTaskModal, setShowCreateNewTaskModal] = useState(false);

  function handleShowCreateNewTaskModal() {
    setShowCreateNewTaskModal((prev) => !prev);
  }

  return (
    <>
      <Layout onClick={handleShowCreateNewTaskModal}>
        <DndContext collisionDetection={closestCorners}>
          {data.map((board) => (
            <Column {...board} key={board.id} />
          ))}
        </DndContext>
      </Layout>
      <CreateNewTaskModal
        showCreateNewTaskModal={showCreateNewTaskModal}
        handleClickModalBackground={handleShowCreateNewTaskModal}
      />
    </>
  );
}
