import React from 'react'
import HeroSection from './HeroSection'
import FoodItemDisplay from './Best Items/FoodItemDisplay'
import Recipies from './Recipies/Recipies'
import CatItemList from './categories/CatItemList'
import Footer from '../../Footer/Footer'
function Home() {
  return (
    <>
    <HeroSection/>
    <CatItemList/>
    <Recipies/>
    {/* <FoodItemDisplay/> */}
    <FoodItemDisplay/>
    <Footer/>
    </>
    
  )
}

export default Home