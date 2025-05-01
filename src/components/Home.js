import { useState , useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import useRestaurantList from '../utils/useRestaurantList';

export const Home = () => {
    const restaurantList = useRestaurantList();
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    let [inputValue, setInputValue] = useState('');

    useEffect(() => {
      setFilteredRestaurants(restaurantList);
    },[restaurantList]);

    const handleInputChange = (ev) => {
        let inputValue = ev.target.value;
        setInputValue(inputValue);
    }

    const handleSearch = (ev) => {
      // The search term is nothing but the input value
      // Everytime the search value changes and search button is clicked, we need to search from the list of all restuarants and not from the list of already filtered restuarants
      // In case of real world scenario, this issue won't be there since we do an api request to get the results
          let filteredValues = restaurantList.filter((res) =>
            res.info.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setFilteredRestaurants(filteredValues);
    };

    if(filteredRestaurants.length === 0) {
        return <Shimmer />;
    }
    return (
      <div className="home mx-[100] my-15">
        <div className="flex items-cente my-8">
          <div className="search-bar">
            <input
              className="border border-black rounded-md w-100 h-8 px-4"
              placeholder='Search here...'
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="border border-black px-4 mx-4 rounded-md bg-orange-300 cursor-pointer" onClick={handleSearch}>
            Search
            </button>
          </div>
          <div className="filter-btn">
            <button
            className='border border-black px-4 mx-4 rounded-md cursor-pointer bg-amber-50'
              onClick={() => {
                let updatedRestaurants = filteredRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating > 4.5
                );
                setFilteredRestaurants(updatedRestaurants);
              }}
            >
              Top rated restaurants
            </button>
            <button
            className='border border-black px-4 mx-4 rounded-md cursor-pointe bg-gray-100'
              onClick={() => {
                setFilteredRestaurants(restaurants);
              }}
            >
              Reset filters
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-10">
          {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant?.info?.id}
                restaurantData={restaurant.info}
              />
            );
          })}
        </div>
      </div>
    );
  };