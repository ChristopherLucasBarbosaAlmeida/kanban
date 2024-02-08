import { Column } from "./components";
import data from "../db.json";
import { Layout } from "./layout";
import { DndContext, closestCorners } from "@dnd-kit/core";

export function App() {
  return (
    <>
      <Layout>
        <DndContext collisionDetection={closestCorners}>
          {data.map((board) => (
            <Column {...board} key={board.id} />
          ))}
        </DndContext>
      </Layout>
    </>
  );
}
