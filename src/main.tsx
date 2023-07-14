import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Base from "./layouts/Base/Base.tsx";
import Dashboard from "./layouts/Dashboard/Dashboard.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import Home from "./pages/Home/Home.tsx";

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
