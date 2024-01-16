import { useState } from "react";
import logo from "../../logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button onClick={() => {
            btnName === "login" ? setBtnName("logout") : setBtnName("login")
          }} className="btn-header">
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
