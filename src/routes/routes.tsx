import { Base, Dashboard } from "@layouts/index";
import { Home, Login, Register } from "@pages/index";

const routes = [
  {
    path: "/login",
    element: (
      <Base>
        <Login />
      </Base>
    ),
  },
  {
    path: "/register",
    element: (
      <Base>
        <Register />
      </Base>
    ),
  },
  {
    path: "/",
    element: (
      <Dashboard>
        <Home />
      </Dashboard>
    ),
  },
];

export default routes;
