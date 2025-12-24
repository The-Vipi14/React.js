import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import isLoggedInContext from "../context/LoggedInContext";

// const Signup = () => {
//   const navigate = useNavigate();
//   const { setisLoggedIn } = useContext(isLoggedInContext);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const submitDetails = (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setError("All fields are required");
//       return;
//     }

//     const user = {
//       username,
//       password,
//     };

//     localStorage.setItem("user", JSON.stringify(user));
//     localStorage.setItem("islogged", JSON.stringify(true));

//     setisLoggedIn(true);
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={submitDetails}
//         className="w-[360px] bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
//       >
//         <h2 className="text-3xl font-semibold text-center">Sign Up</h2>

//         {error && (
//           <p className="text-red-500 text-center text-sm">{error}</p>
//         )}

//         {/* Username */}
//         <div className="flex flex-col gap-1">
//           <label htmlFor="username" className="text-lg">
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Enter username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-amber-400"
//           />
//         </div>

//         {/* Password */}
//         <div className="flex flex-col gap-1">
//           <label htmlFor="password" className="text-lg">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-amber-400"
//           />
//         </div>

//         <button
//           type="submit"
//           className="h-11 bg-amber-500 text-white text-xl rounded-full hover:bg-amber-600 transition"
//         >
//           Create Account
//         </button>

//         <p className="text-center text-sm">
//           Already have an account?{" "}
//           <Link to="/login" className="text-amber-600 hover:underline">
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };



const Signup = () => {
  const navigate = useNavigate();
  const { setisLoggedIn } = useContext(isLoggedInContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitDetails = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    const user = {
      username,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("islogged", JSON.stringify(true));

    setisLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submitDetails}
        className="w-[360px] bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-3xl font-semibold text-center">Sign Up</h2>

        {error && (
          <p className="text-red-500 text-center text-sm">{error}</p>
        )}

        {/* Username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-lg">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <button
          type="submit"
          className="h-11 bg-amber-500 text-white text-xl rounded-full hover:bg-amber-600 transition"
        >
          Create Account
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
