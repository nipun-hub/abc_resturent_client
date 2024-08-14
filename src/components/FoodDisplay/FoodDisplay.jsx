import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

  
  const {food_list} = useContext(StoreContext)
  
  // console.log(food_list);

  return (
    <div className='Food-Display' id='Food-Display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          if (category==="" || category ===item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}></FoodItem>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
