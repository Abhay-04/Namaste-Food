import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const { name, avgRating, sla, cuisines, locality , areaName , cloudinaryImageId } = resData;

  
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <div style={{ display: "flex", gap: "5px" , margin: "10px 0px" }}>
        <h5>{avgRating} stars</h5>
        <h5> | {sla?.slaString}</h5>
      </div>
      <h5 className="resCard-cuisines">{cuisines.join(",")}</h5>
      <h5> {locality} , {areaName} </h5>
    </div>
  );
};

export default ResCard;
