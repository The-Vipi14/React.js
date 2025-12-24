import { useContext } from "react";
import userContext from "../context/userContext";

const Login = () => {
  const { isLoggedIn, dataBase } = useContext(userContext);
  const show = () => {
    console.log(dataBase);
  };

  return (
    <div>
      <button onClick={show}>show data</button>
    </div>
  );
};

export default Login;
