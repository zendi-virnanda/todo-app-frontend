import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  csrfToken: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, _setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  // set user to local storage
  const setUser = (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    _setUser(user);
  };

  // csrf token generation for guest methods
  const csrfToken = async () => {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    return true;
  };

  // set token to local storage
  const setToken = (token) => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
    _setToken(token);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken, csrfToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
