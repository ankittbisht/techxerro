import { Navigate, useRoutes } from "react-router-dom";

import Service from "../view/pages/Service";
import Ourblogs from "../view/pages/Ourblogs/Ourblogs";
import Servicepage from "../view/pages/servicespage/service";
import Team from "../view/pages/Team/Team";
import Singleblog from "../view/pages/singleblog/Singleblog";

const Router = () => {
  const element = useRoutes([
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/blogs",
      element: <Ourblogs />,
    },
    {
      path: "/servicepage",
      element: <Servicepage />,
    },
    {
      path: "/Teams",
      element: <Team />,
    },
    {
      path: "/singleBlog",
      element: <Singleblog/>,
    },
  ]);

  return element;
};

export default Router;
