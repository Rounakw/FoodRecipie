import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import './ProductAll.css'
import Footer from '../../Footer/Footer'
function ProductAll({product}) {
    let url = `https://api.spoonacular.com/food/menuItems/search?query=${product}&number=50&apiKey=54aad910c2fa4c9c932387e3f39fb61f`
   
    let [info, setInfo]=useState('')

    useEffect(()=>{
        async function GetMenuItem(){
            let response = await fetch(url)
            let data = await response.json()
            let dataList = data.menuItems
            // console.log(dataList);
            setInfo(dataList) 
        }
        GetMenuItem()
    },[product])



  return (
    <div className='bg-[#3c424e]'>
    <div className='text-[2vw] font-extrabold text-white  ml-[3vw] p-[1vw]' id='header'>Your search result...</div>
    <div className='ProductAllMain'>
        {
            info == ''? 
            <div role="status">
                <p className='flex relative mt-[0vw] ml-[40vw] w-[20vw] text-[3vw] text-white '>loading....</p>
            </div>
            :info.map((data)=>{
                return <ProductCard title={data.title} image={data.image} brand={data.restaurantChain} id={data.id}/>
            })
        }
    </div>
    <Footer/>
    </div>
  )
}

export default ProductAll