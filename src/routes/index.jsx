import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-pages/ErrorPages";
import Home, { loader as homeLoader } from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
