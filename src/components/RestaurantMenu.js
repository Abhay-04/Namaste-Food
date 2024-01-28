import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { CATEGORIES_URL} from "../utils/constants";
import RestaurantCategories from "./RestaurantCategories.js";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

 

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c?.card?.card?.["@type"] === CATEGORIES_URL
    );

  console.log(categories);
  return (
    <div className="w-6/12 text-center m-auto">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      <div>
        {categories.map((category) => (
          <RestaurantCategories data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
