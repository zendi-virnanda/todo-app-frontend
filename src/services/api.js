import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      let loadToken = JSON.parse(token);
      config.headers["Authorization"] = "Bearer " + loadToken; // for Laravel sanctum back-end
    }
    return config;
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);
export default axios;
