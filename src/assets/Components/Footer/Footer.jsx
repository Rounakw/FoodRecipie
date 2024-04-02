import React from 'react'
// import Icon from '../WebIcon/Icon';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css'
import EmailIcon from '@mui/icons-material/Email';
import icon2 from './icon2.png'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-[#1D2232] w-full text-white flex flex-col mt-[9vw] ' id='footerMain'>

      <div className="up flex flex-row justify-between items-center  w-[88vw] m-auto py-[2vw] ">
      <NavLink  to={"/"}>
      <div className="icon m-0">
        <img src={icon2} alt=""/>
        <span className='iconpart1'>Spice<span className='iconpart2'>Chaser</span></span>
      </div>
</NavLink>

        <div className="socialmedia  p-0 w-[12vw] flex justify-between" id='icolist'>
          <FacebookIcon fontSize="large" className='cursor-pointer'/>
          <YouTubeIcon fontSize="large" className='cursor-pointer'/>
          <WhatsAppIcon fontSize="large" className='cursor-pointer'/>
          <XIcon fontSize="large" className='cursor-pointer'/>
        </div>
      </div>


      <div className="down flex justify-between  w-[90vw] m-auto pb-[2vw]" id='downdiv'>
        <p className='ml-[1vw] cursor-pointer'> <EmailIcon/> rounakbasak12@gmail.com</p>
        <p>© 2024 SpiceChaser™. All Rights. Reserved.</p>
      </div>
    </div>
  )
}
