import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import isLoggedInContext from "../context/LoggedInContext";

const Signup = () => {
  const navigate = useNavigate();
  const { userData, isLoggedIn, setisLoggedIn } = useContext(isLoggedInContext);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const submitDetails = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    await localStorage.setItem("user", JSON.stringify(userData));
    await localStorage.setItem("islogged", JSON.stringify(true));
    alert("user created successfully");
    setisLoggedIn(true);
    navigate("/");
  };
  return (
    <>
      <>
        <form action="" onSubmit={submitDetails}>
          <h3>Signup</h3>
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
          <Link to={"/login"}>I have an account</Link>
        </form>
      </>
    </>
  );
};

export default Signup;
