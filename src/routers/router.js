import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TodoPage from "../pages/TodoPage";
import GuestLayout from "../pages/Layouts/GuestLayout";
import ProtectedLayout from "../pages/Layouts/ProtectedLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "/todo",
        element: <TodoPage />,
      },
    ],
  },
]);

export default router;
