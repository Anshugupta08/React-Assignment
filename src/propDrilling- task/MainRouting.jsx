import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <h1>Page Not Found 404</h1>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
