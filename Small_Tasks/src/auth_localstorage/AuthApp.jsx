import { useContext, useEffect, useState } from "react";

import userContext from "./context/userContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const AuthApp = () => {
  const [loggedInuser, setLoggedInuser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [database, setdatabase] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("dataBase")) || [];
    console.log(data);
    setdatabase(data); // blank
    console.log(database);
    const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
    setIsLoggedIn(loginStatus);
    const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
    setLoggedInuser(loggedInUser);
  }, []);

  // useEffect(() => {
  //   console.log("database updated:", database); // printing value
  // }, [database]);

  return (
    <>
      <BrowserRouter>
        <userContext.Provider
          value={{
            isLoggedIn,
            setIsLoggedIn,
            loggedInuser,
            setLoggedInuser,
            database,
          }}
        >
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default AuthApp;
