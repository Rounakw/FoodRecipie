import React from 'react'
import CatItem from './CatItem'
import './CatItemList.css'

function CatItemList() {
  return (
    <div className='MaincatItemList'> 
    <span>Categories</span>
    <div className='CatItemList'>
        <CatItem itemImg={"🍛"} ItemCategories={"Breakfast"}/>
        <CatItem itemImg={"🥦"} ItemCategories={"Vegan"}/>
        <CatItem itemImg={"🥩"} ItemCategories={"Meat"}/>
        <CatItem itemImg={"🍰"} ItemCategories={"Dessert"}/>
        <CatItem itemImg={"🥪"} ItemCategories={"Lunch"}/>
        <CatItem itemImg={"🍫"} ItemCategories={"Chocolate"}/>
    </div>
    </div>
  )
}

export default CatItemList