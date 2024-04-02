import React from 'react'
import './Card'
import TimerIcon from '@mui/icons-material/Timer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import './Card.css'
function Card({Thumbnail, Title}) {
  return (
  <div className="w-[27vw] rounded-md border bg-[#d0dcf3] card hover:cursor-pointer card" id='card'>
  <img
    src={Thumbnail}
    alt="Laptop"
    className="h-[200px] w-full rounded-md object-cover"
  />
  <div className="p-4">
    <h1 className="text-lg font-semibold mb-3" id='title'>{Title}</h1>
    <div className='flex  py-[0.9vw] justify-between w-[21vw] ' id='tagCont'>
    <p className='flex items-center' id='min'><TimerIcon className='mr-2'/>30 Minutes</p>
    <p className='flex items-center ' id='chicken'><RestaurantIcon className='mr-2'/>Chicken</p>
    </div> 
  </div>
</div>

)
}

export default Card