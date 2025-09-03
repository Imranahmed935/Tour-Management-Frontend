import App from "@/App";
import { LoginForm } from "@/components/Authentication/LoginForm";
import { RegisterForm } from "@/components/Authentication/RegisterForm";
import About from "@/pages/About";
import Verify from "@/pages/verify";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "/about",
      },
    ],
  },
  {
    Component: LoginForm,
    path: "/login",
  },
  {
    Component: RegisterForm,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  
]);