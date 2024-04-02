import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink } from 'react-router-dom';
export default function SliderSlide({ mainImg, food1, food2, food3 }) {
let to = mainImg[1] ==="burger"? "Product-all-burgers" :mainImg[1] ==="pizza"? "Product-all-pizza":"Product-all-pasta"

  return (
    <div className="slide">
      <img src={mainImg[0]} alt="" className='mainimg'/>

      {mainImg[1] === "burger" &&
        <>
          <h3 className="hero-section-burger1">Come<span>Hungry</span></h3>
          <h3 className="hero-section-burger2"><span className="span1">with</span> <span className="span2">Happy</span> Leave</h3>
        </>
      }
      {mainImg[1] === "pizza" &&
        <>
          <h3 className='hero-section-pizza1'>Less <span>drama</span></h3>
          <h3 className='hero-section-pizza2'>want more <span>pizza</span>?</h3>
        </>
      }
      {mainImg[1] === "pasta" &&
        <>
          <h3 className='hero-section-pasta1'>Eat <span>pasta</span>,</h3>
          <h3 className='hero-section-pasta2'>live <span>Longer</span>.</h3>
        </>
      }
      <div className="absolute top-[17vw] left-[2vw] flex " id='cont'>
          <div className="flex flex-col justify-between items-center">
            <img className="cheeseImg" src={food1[0]} alt="" />
            <p className="font-medium text-[1.2vw] text-white">{food1[1]}</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="cheeseImg" src={food2[0]} alt="" />
            <p className="font-medium text-[1.2vw] text-white">{food2[1]}</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img className="cheeseImg" src={food3[0]} alt="" />
            <p className="font-medium text-[1.2vw] text-white">{food3[1]}</p>
        </div>
      </div>

      <NavLink to={to}><button id="exbtn" className="explore-btn h-[3.2vw] px-[1.5vw] flex items-center  font-sans font-medium text-[1.3vw] text-indigo-100 transition-colors duration-150 bg-blue-600 pr-[0.5vw] rounded-lg focus:shadow-outline hover:bg-blue-500">Explore More <NavigateNextIcon fontSize='medium'/> </button></NavLink>
    </div>
  )
}
