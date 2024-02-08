import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { NO_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ItemsList = ({ items }) => {
  const notify = () =>
    toast.success("Item added to cart", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.card.info.id + { index }}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex "
        >
          <div className="py-2 w-10/12">
            <span className="font-semibold">{item.card.info.name}</span>
            <span className="font-semibold">
              {" "}
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>

          <div className="w-2/12">
            <img
              src={
                item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : NO_IMAGE_URL
              }
              alt="Image"
              className="w-22 rounded-lg object-cover"
            />
            <div className="flex justify-center" onClick={notify}>
              <button
                onClick={() => handleAddItems(item)}
                className=" px-2 rounded-lg bg-black text-white"
              >
                Add +{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
