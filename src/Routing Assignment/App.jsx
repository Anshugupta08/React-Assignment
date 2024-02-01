import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowProducts from "./fetchApi";
import Search from "./Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowProducts />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Not Found.....</h1>
      </div>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
