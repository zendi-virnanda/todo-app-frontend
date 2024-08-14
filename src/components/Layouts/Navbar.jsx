import { NavLink } from "react-router-dom";
import axios from "../../services/api";

export default function Navbar() {
  // logout user
  const handleLogout = async () => {
    try {
      const resp = await axios.post("/auth/logout");
      if (resp.status === 200) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="flex justify-between w-full p-4 bg-gray-800 lg:overflow-hidden">
      <div className="flex items-center">
        <NavLink to="/todo" className="text-xl font-bold text-white">
          Todo List App
        </NavLink>
      </div>

      <div className="flex items-center">
        <NavLink to="/todo" className="mr-4 text-white hover:text-gray-400">
          Todo
        </NavLink>
        <NavLink
          to="#"
          className="text-white hover:text-gray-400"
          onClick={handleLogout}
        >
          Logout
        </NavLink>
      </div>
    </nav>
  );
}
