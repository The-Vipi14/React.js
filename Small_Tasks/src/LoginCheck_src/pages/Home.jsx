import { useContext } from "react";
import isLoggedInContext from "../context/LoggedInContext";
import Login from "./Login";
import "./Home.css";

const Home = () => {
  const { isLoggedIn, setisLoggedIn } = useContext(isLoggedInContext);

  const logout = () => {
    localStorage.setItem("islogged", JSON.stringify(false));
    setisLoggedIn(false);
  };

  return isLoggedIn ? (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">MyApp</div>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </nav>

      {/* Page Content */}
      <div className="home-container">
        <div className="home-card">
          <h1>Welcome Back 👋</h1>
          <p>You are successfully logged in.</p>
        </div>
      </div>
    </>
  ) : (
    <Login />
  );
};

export default Home;
