import { useContext, useEffect, useState } from "react";

import userContext from "./context/userContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
  }, []);

  // useEffect(() => {
  //   console.log("database updated:", database); // printing value
  // }, [database]);
  return (
    <>
      <BrowserRouter>
        <userContext.Provider value={{ isLoggedIn, loggedInuser, database }}>
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

// import { useContext, useEffect, useState } from "react";
// import userContext from "./context/userContext";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// const AuthApp = () => {
//   const [loggedInuser, setLoggedInuser] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [database, setdatabase] = useState([]);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("dataBase")) || [];
//     setdatabase(data);

//     const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
//     setIsLoggedIn(loginStatus);
//   }, []);

//   return (
//     <userContext.Provider
//       value={{ isLoggedIn, loggedInuser, database, setdatabase }}
//     >
//       <Home />
//       <Login />
//       <Signup />
//     </userContext.Provider>
//   );
// };

// export default AuthApp;
