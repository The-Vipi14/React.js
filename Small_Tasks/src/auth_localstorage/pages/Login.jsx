import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useContext, useState } from "react";
import userContext from "../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, database } = useContext(userContext);

  const show = () => {
    console.log(database);
  };
  const login = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h1>Login </h1>
        <form onSubmit={login}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            id="password"
          />
          <button type="submit">submit</button>
          <Link to={"/signup"}>create an accout.</Link>
        </form>
      </div>
    </>
  );
};

export default Login;
