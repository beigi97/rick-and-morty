import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-pages/ErrorPages";
import Home, { loader as homeLoader } from "./Home";
import PersonagensList, {
  loader as personagensListLoader,
} from "./PersonagensList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
    ],
  },
  {
    path: "/personagens",
    element: <PersonagensList />,
    errorElement: <ErrorPage />,
    loader: personagensListLoader,
  },
]);
export default router;
