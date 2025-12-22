import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import isLoggedInContext from "./context/LoggedInContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const ContextApp = () => {
  const [userData, setuserData] = useState({});
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const isLogged = JSON.parse(localStorage.getItem("islogged"));
    if (isLogged === true) {
      setisLoggedIn(true);
      console.log(isLoggedIn);
    } else {
      console.log(" not");
    }
    if (storedUser) {
      setuserData(storedUser);
    }
  }, [isLoggedIn]);

  return (
    <>
      <isLoggedInContext.Provider
        value={{ userData, isLoggedIn, setisLoggedIn }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </isLoggedInContext.Provider>
    </>
  );
};

export default ContextApp;
