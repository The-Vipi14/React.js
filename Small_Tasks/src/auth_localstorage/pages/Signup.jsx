import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import userContext from "../context/userContext";

const Signup = () => {
  const navigator = useNavigate();
  const { isLoggedIn, database } = useContext(userContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("enter valid credentials");
    }
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    const existsUser = database.some((user) => user.email === email);
    if (existsUser) {
      toast.error("user exists already");
      setEmail("");
      setPassword("");
      setUsername("");
      navigator("/login");
      return;
    } else {
      const updatedDataBase = [...database, newUser];
      localStorage.setItem("dataBase", JSON.stringify(updatedDataBase));
      toast.success("user created successfully");
      setEmail("");
      setPassword("");
      setUsername("");
      navigator("/");
    }
  };
  return (
    <>
      <form
        onSubmit={createUser}
        className="max-w-md text-red-50 mx-auto mt-10 bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-amber-200/60 px-3 py-2 rounded-lg outline-none border focus:border-amber-400"
              placeholder="Enter username"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-amber-200/60 px-3 py-2 rounded-lg outline-none border focus:border-amber-400"
              placeholder="Enter email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-amber-200/60 px-3 py-2 rounded-lg outline-none border focus:border-amber-400"
              placeholder="Enter password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-medium transition"
        >
          Create
        </button>
      </form>
    </>
  );
};

export default Signup;
