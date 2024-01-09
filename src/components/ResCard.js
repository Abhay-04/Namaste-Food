import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const { resName, resRating, resETA, cuisines, resLocation, imgId } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + imgId} />
      <h3>{resName}</h3>
      <div style={{ display: "flex", gap: "5px" }}>
        <h5>{resRating} stars</h5>
        <h5> | {resETA} mins</h5>
      </div>
      <h5>{cuisines}</h5>
      <h5>{resLocation}</h5>
    </div>
  );
};

export default ResCard;
