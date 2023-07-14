import Base from "../layouts/Base/Base";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
