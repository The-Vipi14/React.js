import { useContext, useState } from "react";
import userContext from "../context/userContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, loggedInuser, setLoggedInuser, database } =
    useContext(userContext);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    localStorage.setItem("LoggedInUser", JSON.stringify(""));
  };
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LEFT — LOGO */}
        <Link to={"/"} className="text-2xl font-bold text-indigo-600">
          MyApp
        </Link>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* PROFILE (only when logged in) */}
          {isLoggedIn && (
            <div className="flex items-center gap-2 cursor-pointer">
              {/* PROFILE ICON */}
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                  />
                </svg>
              </div>

              <span className="hidden sm:block font-medium">
                {loggedInuser?.username}
              </span>
              <button
                className="px-4 ml-3.5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                onClick={logout}
              >
                logout
              </button>
            </div>
          )}

          {/* LOGIN / SIGNUP */}
          {!isLoggedIn && (
            <div className="flex gap-3">
              <Link
                to={"/login"}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                to={"/signup"}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
