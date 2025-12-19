import { useEffect, useState } from "react";
import "./style.css";

const Theme = () => {
  const [theme, setTheme] = useState(false)
  return (
    <>
      <div className={!theme ? "box" : "box box-dark"}>
        <h1>Theme page</h1>
        <button onClick={()=>setTheme(!theme)}>change theme</button>
      </div>
    </>
  );
};

export default Theme;
