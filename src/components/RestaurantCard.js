import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";

const RestaurantCard = ({ restaurantData }) => {
    const { name, avgRatingString, cuisines, costForTwo, cloudinaryImageId, id} = restaurantData;
    const slaString = restaurantData.sla.slaString;
    return (
      <Link to={ "/restaurants/" + id}>
        <div className="rounded-lg hover:scale-95 hover:origin-center hover:transition hover:ease-in hover:duration-100">
          <img
            className="rounded-lg"
            alt="res-card"
            src={CDN_URL + cloudinaryImageId}
          />
          <div className="py-4 max-w-[280]">
            <h3 className="font-bold">{name}</h3>
            <div className="font-extralight text-sm">
              <div>{cuisines.join(', ')}</div>
              <div>{costForTwo}</div>
              <div>{avgRatingString}</div>
              <div>{slaString}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  // Higher Order Component
  export const withPromotion = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
              <label className="absolute">Promoted</label>
              <RestaurantCard {...props}/>
            </div>
        );
    }
  }

  export default RestaurantCard;

  