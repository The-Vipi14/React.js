import { useRef, useState } from "react";
import "./style.css";
export const UseRff = () => {
  const username = useRef("");

  const focusUsername = () => {
    username.current.focus();
  };

  return (
    <>
      <h1>basic use of useRef : select dom element: focus</h1>
      <input type="text" ref={username} />
      <button onClick={focusUsername}>focus</button>
    </>
  );
};

export const FormHandling = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, seterror] = useState("");
  const submitForm = (e) => {
    e.preventDefault();

    if (usernameRef.current.value === "") {
      seterror("Username is required");
      usernameRef.current.focus();
      return;
    }
    if (passwordRef.current.value === "") {
      seterror("Username is required");
      passwordRef.current.focus();
      return;
    }
    const userDetails = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(userDetails);

    seterror("");
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <>
      <h2>Form handing with useRef Hook</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="username">username</label>
        <input type="text" id="username" ref={usernameRef} />
        <label htmlFor="password">password</label>
        <input type="text" id="password" ref={passwordRef} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">submit</button>
      </form>
    </>
  );
};
