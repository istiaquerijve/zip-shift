import { createBrowserRouter } from "react-router";
import RootLayoyt from "../layout/RootLayoyt";
import Home from "../pages/Home/Home/Home";
import Covarage from "../pages/Covarage/Covarage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import SingUp from "../pages/Auth/Register/Register";
import Register from "../pages/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayoyt,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
        }, 
        {
          path: "/covarage",
          Component: Covarage,
          loader: () => fetch("/warehouses.json").then((res) => res.json())
        }
    ]

  },

  {
    path: "/",
    Component: AuthLayout,
    children:[
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      }
    ]

  }
]);