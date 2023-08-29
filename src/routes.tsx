import { createBrowserRouter } from "react-router-dom";

import Error from "pages/404";
import Home from "pages/Home";
import Root from "pages/Root";

import { GameDetail } from "features/games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/games/:slug", element: <GameDetail /> },
    ],
  },
]);

export default router;
