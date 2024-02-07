import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div>
        <div
          onClick={handleClick}
          className=" cursor-pointer w-full bg-gray-50 shadow-lg my-4 flex justify-between p-4"
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        <div>{showItems && <ItemsList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategories;
