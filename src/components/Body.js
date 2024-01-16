import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listofRes, setListofRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6190347&lng=77.0640016&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

 

  return listofRes.length=== 0 ? <Shimmer /> : (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listofRes.filter((res) => res.info.avgRating >= 4.2);
            console.log(filteredList);
            setListofRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listofRes.map((restaurant, index) => (
          <ResCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
