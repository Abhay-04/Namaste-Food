import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
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
            <img src={CDN_URL + item.card.info.imageId} alt="Image"  className="w-22 rounded-lg object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
