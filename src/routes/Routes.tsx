import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Animals from "../pages/Animals";
import AnimalView from "../pages/AnimalView";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animals/:id",
        element: <AnimalView />,
      },
    ],
  },
]);

export default Router;
