import { useState } from "react";
import "./style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">

      <div className="logo">MyLogo</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;