import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Sign = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const submitDetails = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("user registered successfully ✅");
    console.log(user);
    setpassword("");
    setusername("");
    navigate("/");
  };

  return (
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
  );
};

export default Sign;
