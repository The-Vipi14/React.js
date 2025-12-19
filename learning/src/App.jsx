import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Concept from "./Hooks/useEffect/Concept";
import { UseRff, FormHandling, ScrollExample } from "./Hooks/useRef/UseRff";
import Page1 from "./pages/Page1";
import Home from "./pages/home/Home";
import UseState from "./Hooks/useState/useState";
import { UseCallback } from "./Hooks/useCallback/useCallback";
import Theme from "./SmallTasks/ThemePage/Theme";
import Aos from "./SmallTasks/AOS_animation/Aos";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Sign from "./SmallTasks/Register-login/Sign";
import Login from "./SmallTasks/Register-login/Login";
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Concept/> */}
      {/* <Page1/> */}
      {/* <ScrollExample/> */}
      {/* <FormHandling /> */}
      {/* <UseState /> */}
      {/* <UseCallback/> */}
      {/* <Theme/> */}
      {/* <Aos/> */}
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={2000} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Sign />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
