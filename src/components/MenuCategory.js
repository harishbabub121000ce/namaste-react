import { lazy } from 'react';
import MenuItem from './MenuItem';

const ChevronDownIcon = lazy(()=> {
    return import('../icons/ChevronIconDown');
});
const ChevronUpIcon = lazy(()=> {
    return import('../icons/ChevronIconUp');
});

const MenuCategory = ({item, show, setShowIndex}) => {
const handleCategoryClick = () => {
    setShowIndex();
}

    return (
      <div>
        <div
        onClick={handleCategoryClick}
        className="flex items-center justify-between border border-solid border-gray-300 rounded-2xl p-5 mb-5 cursor-pointer"
      >
        <div>{item?.card?.card?.title}</div>
        {show ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {show && (
        <div className='px-5 pb-5'>
          {item?.card?.card?.itemCards?.map((itemCard)=> {
              return (<MenuItem itemCard={itemCard}/>)
          })}
        </div>
      )}
      </div>  
    );
}
export default MenuCategory;