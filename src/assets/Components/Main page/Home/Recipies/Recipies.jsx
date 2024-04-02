import React from 'react'
import Card from './Card'
import './Recipies.css'
import burger from './burger.jpg'
import fish from './fish.jpg'
import bakedcod from './bakedcod.jpg'
import fishcake from './fishcake.jpg'
import tunasteak from './tunasteak.jpg'
import { NavLink } from 'react-router-dom'
// import 

function Recipies() {
  return (
    <div className='MainRecipiesContainer'>
      <h3>Simple And Tasty Recipies.</h3>
      <p>“The gentle art of gastronomy is a friendly one. It hurdles the language barrier, makes friends among civilized people, and warms the heart.” -Samuel Chamberlain</p>
      <div className="RecipiesContainer">
        <NavLink to={"/Recipie/food/247615"}>
        <Card Thumbnail={burger} Title={"Big and juicy beef cheeseburger"} />
        </NavLink>
        <NavLink to={"Recipie/food/264765"}>
        <Card Thumbnail={fish} Title={"Super Summer Grilled Bluefish"} /></NavLink>
        <NavLink to={"Recipie/food/354068"}>
        <Card Thumbnail={bakedcod} Title={"Mediterranean Cod with Lemon"} /></NavLink>
        <NavLink to={"Recipie/food/354068"}>
        <Card Thumbnail={fishcake} Title={"Proper British Fish Cakes"} /></NavLink>
        <NavLink to={"/Recipie/food/247615"}>
        <Card Thumbnail={tunasteak} Title={"Marinated Tuna Steak with salaad"} /></NavLink>
        
      </div>
        
    </div>
  )
}

export default Recipies