import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState();
  const navigator = useNavigate();
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log(data);

  const login = (e) => {
    e.preventDefault();
    if (username !== data.username || password !== data.password) {
      toast.error("Invalid credentials ❌");
      return;
      setusername("");
      setpassword("")
    }
    toast.success("Login Successful ✅");
    navigator("/");
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
        <Link to={"/register"}>create new account</Link>
      </form>
    </>
  );
};

export default Login;
