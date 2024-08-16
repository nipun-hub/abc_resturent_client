import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Menu = () => {

  const [category,setcategory] = useState("");
  return (
    <div>
      {/* <Header/> */}
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      {/* <AppDownloader/> */}
    </div>
  )
}

export default Menu
