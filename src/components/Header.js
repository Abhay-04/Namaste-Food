import { useState } from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link>Cart</Link>
         
          
          <button
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
            className="btn-header"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
