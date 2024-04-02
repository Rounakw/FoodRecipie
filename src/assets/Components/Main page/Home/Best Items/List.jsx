import React from 'react'
import './item.css'
import { NavLink } from 'react-router-dom'
export default function List({item, itemName, id=""}) {
  return (
    <div className='full'>
    <div className='items' id={id}>
      <NavLink to={`Recipie/${id}`}><img src={item} alt="" /></NavLink>
      
    </div>
    <span className={id}>{itemName}</span>
     </div>
  )
}

