import React from 'react'
import List from './List'
import './FoodItemDisplay.css'
import noodles from './noodles.jpeg'
import biryani from './biryani.jpg'
import momo from './momo.jpg'
import eggroll from './eggroll.jpg'
import beef from './beef.jpg'
import fish from './fish.jpg'

function FoodItemDisplay() {
  return (
    <div className='display'>
      <h3>All&#8192;Time Best&#8192;Items&#8192;</h3>
      <div className='display-items'>
        <List item={noodles} itemName={"Noodles"} id='Pasta' />
        <List item={momo} itemName={"Momo"} id='chinese' />
        <List item={beef} itemName={"Beef Items"} id='Beef' />
        <List item={biryani} itemName={"Biryani"} id='Biryani'/>
        <List item={eggroll} itemName={"Rolls"} id='Rolls'/>
        <List item={fish} itemName={"Fish Items"} id="Fish" />
      </div>
    </div>
  )
}

export default FoodItemDisplay