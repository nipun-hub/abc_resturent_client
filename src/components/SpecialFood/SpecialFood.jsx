import React, { useContext } from 'react'
import './SpecialFood.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const SpecialFood = ({ limit }) => {


  const { food_list } = useContext(StoreContext)

  // console.log(food_list);

  return (
    <div className='Spesial-Food-Display' id='Food-Display'>
      {/* <h2>Top dishes near you</h2> */}
      <div className="Spesial-food-display-list">
        {food_list.slice(0, limit).map((item, index) => {
          if (true) {
            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}></FoodItem>
          }
        })}
      </div>
    </div>
  )
}

export default SpecialFood
