import { useState } from "react";
import Header from "../components/Auth/AuthHeader";
import { Input } from "../components/Common/Input";
import AuthFooter from "../components/Auth/AuthFooter";
import Button from "../components/Common/Button";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "../services/api";

export default function LoginPage() {
  const { setUser, csrfToken, setToken } = useAuth();
  const [error, setError] = useState(null);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Add a loading state variable
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const body = {
      email: login.email,
      password: login.password,
    };
    await csrfToken();
    try {
      const resp = await axios.post("/auth/login", body);

      if (resp.status === 200) {
        console.log(resp.data.data.token);
        setToken(resp.data.data.token);
        navigate("/todo");
      }
      if (resp.status === 401) {
        setError(resp.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        setError(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
      <div className="w-full max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg">
        <Header heading="Sign in to your account" />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && (
            <div
              className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>{error}</div>
            </div>
          )}
          <form
            className="space-y-6"
            action="#"
            method="POST"
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Input
              labelFor="email"
              labelText="Email address"
              handleChange={(e) => onChange(e)}
              value={login.email}
              id="email"
              name="email"
              type="email"
              isRequired={true}
              placeholder=""
              customClass="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              labelCustomClass="block text-sm font-medium leading-6 text-gray-900"
            />
            <Input
              labelFor="password"
              labelText="Password"
              handleChange={(e) => onChange(e)}
              value={login.password}
              id="password"
              name="password"
              type="password"
              isRequired={true}
              placeholder=""
              customClass="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              labelCustomClass="block text-sm font-medium leading-6 text-gray-900"
            />
            <Button
              text={
                loading ? (
                  <svg
                    className="w-5 h-5 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  "Sign in"
                )
              }
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            />

            <AuthFooter
              textHeader="Don't have an account?"
              textLink="Register"
              link="/register"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
