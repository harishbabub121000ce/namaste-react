import { RESTAURANTS_LIST_URL } from './constants';
import { useState, useEffect } from 'react';

const useRestaurantList = () => {
    let [restaurantList, setRestaurantList] = useState([]);
    useEffect(()=> {
        fetchRestaurants();
      },[]);
      const fetchRestaurants = async ()=> {
        let res = await fetch(RESTAURANTS_LIST_URL);
        let jsonRes = await res.json();
        let restaurants = jsonRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantList(restaurants);
      }
      return restaurantList;
}

export default useRestaurantList;