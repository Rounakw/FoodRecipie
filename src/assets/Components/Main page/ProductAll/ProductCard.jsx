import React from 'react'
import './ProductCard.css'
import TimerIcon from '@mui/icons-material/Timer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Button from '@mui/material/Button';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import { NavLink } from 'react-router-dom';
function ProductCard({id, title, image="https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", brand }) {
    return (
        // <div  className="product-card">
        <div className="w-[27vw] rounded-md border bg-[#d0dcf3] card hover:cursor-pointer productCard" id='singleCard'>
            <img
                src={image}
                alt={"failed to load "}
                className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4">
                <h1 className="text-lg font-semibold mb-3">{title}</h1>
                {/* <Fab variant="extended" sx={{color:"black",fontWeight:"700"}}>#{brand}</Fab> */}
                <p id='brand'>#{brand}</p>
                <div className='flex  py-[0.9vw] justify-between w-[21vw]' id='details'>
                    <p className='flex items-center'><TimerIcon className='mr-2' />30 Minutes</p>
                    <p className='flex items-center '><RestaurantIcon className='mr-2' />Chicken</p>
                </div>
                <NavLink to={`../Recipie/food/${id}`}><Button variant="contained">Get Recipies</Button></NavLink>
                
            </div>

        </div>
    )
}

export default ProductCard