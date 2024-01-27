import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const {
    name,
    avgRating,
    sla,
    cuisines,
    locality,
    areaName,
    cloudinaryImageId,
  } = resData;

  return (
    <div className="px-2 py-3 w-64 bg-gray-100 rounded-lg hover:bg-gray-300 hover:border border-solid  border-black">
      <img className="w-[230px] h-[180px] rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold text-lg">{name}</h3>
      <div className="flex gap-2 my-3">
        <h5 className="font-semibold">{avgRating} ⭐ </h5> {"|"}
        <h5 className="text-red-700">  {sla?.slaString}</h5>
      </div>
      <h5 className="break-words">{cuisines.join(", ")}</h5>
      <h5 className="font-semibold my-3">
        {" "}
        {locality} , {areaName}{" "}
      </h5>
    </div>
  );
};

export default ResCard;
