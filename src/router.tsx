import Home from "./pages/Home";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./layout/GeneralLayout";

interface RouterBase {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

const routerData: RouterBase[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map(router => {
    return {
      path: router.path,
      element: <GeneralLayout>{router.element}</GeneralLayout>,
    };
  })
);
