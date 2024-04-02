import React from 'react'
import './CatItem.css'
import { NavLink } from 'react-router-dom'
function CatItem({itemImg, ItemCategories}) {
  return (
    <NavLink to={`Recipie/${ItemCategories}`}>
    <div className='item' id={ItemCategories}>
        <p>{itemImg}</p>
        <span>{ItemCategories}</span>
    </div>
    </NavLink>
  )
}

export default CatItem