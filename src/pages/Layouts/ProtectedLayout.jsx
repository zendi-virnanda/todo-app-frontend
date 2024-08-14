import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axios from "../../services/api";
import Navbar from "../../components/Layouts/Navbar";

export default function ProtectedLayout() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  // check if user is logged in or not from server
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("/auth/me");
        console.log(resp);

        if (resp.status === 200) {
          setUser(resp.data.data);
        }
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.href = "/";
        }
      }
    })();
  }, []);

  // if user is not logged in, redirect to login page
  if (!user) {
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
