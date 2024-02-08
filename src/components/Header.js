import { useState } from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between px-6 py-4 bg-red-200 shadow-md">
      <div className="logo-container">
        <img className="w-46" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-6">
          <li>Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart" className="font-bold text-xl">
              🛒 ({cartItems.length} items)
            </Link>
          </li>

          <button
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
            className="px-4 py-1 bg-green-400 rounded-md"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
