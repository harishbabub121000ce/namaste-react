import { useState, useEffect } from 'react';
import { RESTAURANT_MENU_URL } from './constants';
const useRestaurantData = (id) => {
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    let data = await fetch(RESTAURANT_MENU_URL + id);
    data = await data.json();
    const restaurantInfo = data?.data?.cards;
    setRestaurantData(restaurantInfo);
  };
  return restaurantData;
};
export default useRestaurantData;
