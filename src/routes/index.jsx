import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-pages/ErrorPages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
