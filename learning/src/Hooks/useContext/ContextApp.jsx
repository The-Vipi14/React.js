import ThemeContext from "./Context";
import UseContext from "./UseContext";
import { useState } from "react";
const ContextApp = () => {

const [theme,setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <UseContext />
    </ThemeContext.Provider>
  );
};

export default ContextApp;
