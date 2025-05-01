import { MENU_ITEM_IMAGE } from "../utils/constants";
const MenuItem = ({ itemCard }) => {
  const { name, price, defaultPrice, imageId, ratings, description } = itemCard?.card?.info;
  return (
    <div className="flex justify-between mb-5">
      <div className="flex flex-col">
        <div className="font-bold">{name}</div>
        <div className="font-bold"><span>₹ </span>{!isNaN(price) ? price / 100 : defaultPrice / 100}</div>
        <div className="text-[#116649] text-sm my-5">{ratings?.aggregatedRating?.rating}<span className="text-[#02060c99]">{'(' + ratings?.aggregatedRating?.ratingCount + ')'}</span></div>
        <div className="text-sm text-[#02060c99] line-clamp-2">
            {description}
        </div>
      </div>
      <img className="w-[150] h-[150] rounded-2xl" src={MENU_ITEM_IMAGE + imageId}></img>
    </div>
  );
};
export default MenuItem;
