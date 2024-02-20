import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Board } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/:id",
        element: <Board />,
        loader: ({ params }) => {
          return params;
        },
      },
    ],
  },
]);
