import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const { name, avgRating, sla, cuisines, locality, cloudinaryImageId } = resData;

  
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <div style={{ display: "flex", gap: "5px" }}>
        <h5>{avgRating} stars</h5>
        <h5> | {sla.deliveryTime} mins</h5>
      </div>
      <h5>{cuisines[0]}</h5>
      <h5>{locality}</h5>
    </div>
  );
};

export default ResCard;
