import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import userContext from "../context/userContext";
import Navbar from "../components/Navbar";

const Home = () => {
  const { isLoggedIn, setIsLoggedIn, loggedInuser, setLoggedInuser, database } =
    useContext(userContext);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    localStorage.setItem("LoggedInUser", JSON.stringify(""));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome {loggedInuser?.username ?? "Guest"} 👋
        </h1>

        <p className="text-gray-600">Add your page content here.</p>
      </main>
    </div>
  );
};

export default Home;
