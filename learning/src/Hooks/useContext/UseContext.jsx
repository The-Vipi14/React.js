import { useContext } from "react";
import ThemeContext from "./Context";
import './style.css'

 
const UseContext = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <h1 className="theme">{theme}</h1>
      <button onClick={changeTheme}>change</button>
    </>
  );
};

export default UseContext;
