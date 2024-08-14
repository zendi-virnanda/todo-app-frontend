import "./App.css";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodoPage from "./pages/TodoPage";
import { AuthProvider } from "./contexts/AuthContext";
import router from "./routers/router";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
