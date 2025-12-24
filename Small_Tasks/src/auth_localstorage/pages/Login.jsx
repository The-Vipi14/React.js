import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import userContext from "../context/userContext";

const Login = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, setIsLoggedIn, loggedInuser, setLoggedInuser, database } =
    useContext(userContext);

  const login = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("all fields are required");
    }
    const user = database.find((user) => user.email === email);
    if (!user) {
      toast.error("Invalid credentials");
    }
    if (user.password !== password) {
      toast.error("Invalid credentials");
    }
    if (user.password === password && user.email) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn",JSON.stringify(true));
      setLoggedInuser(user);
      localStorage.setItem("LoggedInUser", JSON.stringify(user));
      setEmail("");
      setPassword("");
      toast.success("Login successfully");
      navigator("/");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Login
          </h1>

          <form onSubmit={login} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>

            <Link
              to={"/signup"}
              className="block text-center text-sm mt-3 text-blue-600 hover:underline"
            >
              Create an account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
