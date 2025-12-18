import { useState } from "react";
import "./style.css";

const UseState = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const userDetails = {
      username: username,
      password: password,
    };

    console.log(userDetails);

    setusername("");
    setpassword("");
  };

  return (
    <>
      <h1>Form handling by useState </h1>
      <form onSubmit={handleForm}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UseState;
 