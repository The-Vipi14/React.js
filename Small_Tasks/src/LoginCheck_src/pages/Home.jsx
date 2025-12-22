import { useContext } from "react";
import { useLocation } from "react-router-dom";

import isLoggedInContext from "../context/LoggedInContext";
import Login from "./Login";
import Signup from "./Signup";

const Home = () => {
  const {  isLoggedIn , setisLoggedIn} = useContext(isLoggedInContext);
  
 const logout  = () =>{
  localStorage.setItem("islogged", JSON.stringify(false));
  setisLoggedIn(false)
 }

  return isLoggedIn ? (
    <> 
      <h1>Home page</h1>
      <button onClick={logout}>logout</button>
    </>
  ) : (
    <Login />
  );
};

export default Home;
