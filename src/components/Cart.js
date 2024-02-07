import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        onClick={handleClearCart}
        className="p-2 m-2 bg-black rounded text-white"
      >
        Clear Cart
      </button>

      {cartItems.length === 0 && (
        <h1>Cart is Empty . Add items to the cart !</h1>
      )}
      <div className="w-6/12 m-auto">
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
