import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import SpecialFood from '../../components/SpecialFood/SpecialFood'
import OrderCard from '../../components/OrderCard/OrderCard'

const Home = () => {

  const [category, setcategory] = useState("");
  return (
    <div>
      <Header />
      <SpecialFood limit={6} />
      <OrderCard />
    </div>
  )
}

export default Home
