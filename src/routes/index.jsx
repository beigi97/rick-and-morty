import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-pages/ErrorPages";
import Home, { loader as homeLoader } from "./Home";
import PersonagensList, {
  loader as personagensListLoader,
} from "./PersonagensList";
import EpisodeList, { loader as EpisodeListLoader } from "./EpisodeList";

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
  {
    path: "/episodes",
    element: <EpisodeList />,
    loader: EpisodeListLoader,
  },
]);
export default router;
