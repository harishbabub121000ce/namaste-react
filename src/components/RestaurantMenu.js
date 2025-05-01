import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurantData";
import { lazy, useState } from "react";
// import StarRatingIcon from "../icons/StarRatingIcon";
import MenuCategory from "./MenuCategory";

const StarRatingIcon = lazy(()=> {
    return import('../icons/StarRatingIcon');
});
const RestaurantMenu = () => {
 const { id } = useParams();
 const restaurantData = useRestaurantData(id);
 const [showIndex, setShowIndex] = useState(0);
if(!restaurantData.length > 0) {
    return <Shimmer />;
}
const resData =  restaurantData[2]?.card?.card?.info;
const categories = restaurantData?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
const itemCategories = categories.filter((item) => {
    return item?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
});
// loop through the list of the menuList items and render the details like food item and its price.

    return (
      <div className="mx-[450] my-15">
        <h1 className="text-3xl mb-4">{resData?.name}</h1>
        <div className="p-5 border border-solid border-gray-300 rounded-2xl">
          <div className="flex items-center font-bold text-sm ">
            <StarRatingIcon />
            <span className="ml-2">
              {resData?.avgRatingString +
                "(" +
                resData?.totalRatingsString +
                ")"}
            </span>
            <span className="ml-2 w-1 h-1 rounded-xl bg-gray-400"></span>
            <span className="ml-2">{resData?.costForTwoMessage}</span>
          </div>
          <div className="mt-2 text-[#fb6100]">
            {resData?.cuisines?.join(", ")}
          </div>
        </div>
        <div className="my-5">
          {itemCategories.map((item, index) => {
            return (
                <MenuCategory item={item} show={index === showIndex ? true : false} setShowIndex={()=> setShowIndex(index)}/>
            );
          })}
        </div>
      </div>
    );
}

export default RestaurantMenu;