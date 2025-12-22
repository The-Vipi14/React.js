import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import isLoggedInContext from "../context/LoggedInContext";

const Login = () => {
  const navigate = useNavigate();
  const { userData, setisLoggedIn } = useContext(isLoggedInContext);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (username === userData.username && password === userData.password) {
      alert("loggedin successfully");
      localStorage.setItem("islogged", JSON.stringify(true));
       setisLoggedIn(true)
      navigate("/");
    }
  };

  return (
    <>
      <form action="" onSubmit={login}>
        <h3>Login</h3>
        <label htmlFor="username">username</label>
        <input
          type="text"
          required
          placeholder="Enter username"
          id="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="text"
          value={password}
          placeholder="password"
          id="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <Link to={"/signup"}>signup</Link>
    </>
  );
};

export default Login;
