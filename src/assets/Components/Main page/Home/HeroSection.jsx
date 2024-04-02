// import React from 'react'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

import SliderSlide from "./Slider Component/Slider";

import mainBurger from '../Home/images/image1.jpg';
import burger1 from '../Home/images/turkey-burger.jpg'
import burger2 from '../Home/images/chicken-burger.jpg'
import burger3 from '../Home/images/mashroom-burger.png'

import mainPizza from '../Home/images/image2.jpg'
import pizza1 from '../Home/images/margherita pizza.webp'
import pizza2 from '../Home/images/meat pizza.webp'
import pizza3 from '../Home/images/pepperoni-pizza.webp'

import mainpasta from '../Home/images/image3.jpg';
import pasta1 from '../Home/images/Manicotti.webp'
import pasta2 from '../Home/images/Fusilli Pasta.webp'
import pasta3 from '../Home/images/Rigatoni Pasta.webp'

export default function HeroSection() {
  const settings = {
    // dots: true,
    // fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    slidesToShow: 1,
    waitForAnimate: false,
    pauseOnHover: false
  };
  return (
    <div className="slider-container m-auto ">
      <Slider {...settings}>
        <SliderSlide mainImg={[mainBurger,"burger"]} food1={[burger1,"Turkey Burger"]} food2={[burger2,"Chicken Burger"]} food3={[burger3,"Mashroom Burger"]}/>
        <SliderSlide mainImg={[mainPizza,"pizza"]} food1={[pizza1,"Margherita Pizza"]} food2={[pizza2,"Meat Pizza"]} food3={[pizza3,"Pepperoni Pizza"]}/>
        <SliderSlide mainImg={[mainpasta,"pasta"]} food1={[pasta1,"Manicotti Pasta"]} food2={[pasta2,"Fusilli Pasta"]} food3={[pasta3,"Rigatoni Pasta"]}/>
        
      </Slider>
    </div>
  );
}
