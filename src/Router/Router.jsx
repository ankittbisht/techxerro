import { Navigate, useRoutes } from "react-router-dom";

import Service from "../view/pages/Service";
import Ourblogs from "../view/pages/Ourblogs/Ourblogs";

const Router = () => {
  const element = useRoutes([
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/blogs",
      element: <Ourblogs/>,
    },
  ]);

  return element;
};

export default Router;
