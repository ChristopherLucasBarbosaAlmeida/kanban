import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Board } from "../pages/index";

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
