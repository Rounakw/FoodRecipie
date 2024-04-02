import React, { useState } from 'react'
import icon2 from './icon2.png'
import HomeIcon from '@mui/icons-material/Home';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
let [menuDisplay, setMenuDisplay] = useState(false)

function handleOnClickMenu(){
  setMenuDisplay(!menuDisplay)
}
let [search, SetSearch] = useState("")

function handleOnchangeInput(e){
SetSearch(e.target.value);
}
  return (
    
    <div className='navbar'>
      <NavLink  to={""}>
      <div className="icon">
        <img src={icon2} alt="" />
        <span className='iconpart1'>Spice<span className='iconpart2'>Chaser</span></span>
      </div>
      </NavLink>

      <div className="pageList">
        <p> <NavLink to={""}><HomeIcon color='primary'/> Home</NavLink></p>
        <p> <NavLink to={"Recipie"}><FoodBankIcon color='primary'/> Recipie</NavLink></p>
        <p><NavLink to={"Store"}><ShoppingBagIcon color='primary'/> Store</NavLink></p>
        <p><NavLink to={"Contact"}><ContactPageIcon color='primary'/> Contact us</NavLink></p>
      </div>
 
  <div className={menuDisplay? "hamburgerMenu":"hidden"}>
  <p> <NavLink to={""}><HomeIcon color='primary'/> Home</NavLink></p>
        <p> <NavLink to={"Recipie"}><FoodBankIcon color='primary'/> Recipie</NavLink></p>
        <p><NavLink to={"Store"}><ShoppingBagIcon color='primary'/> Store</NavLink></p>
        <p><NavLink to={"Contact"}><ContactPageIcon color='primary'/> Contact us</NavLink></p>
  </div>

      
      <div className="searchSection">
        <input type="text" placeholder='Search items' value={search} onChange={handleOnchangeInput} />
        <NavLink to={`Recipie/${search}`}><button>Search</button></NavLink>
      </div>

      <div className="menu" onClick={handleOnClickMenu} >
        {menuDisplay?<CloseIcon sx={{ color: "white",  fontSize:"40px" }} />:<MenuIcon sx={{ color: "white",  fontSize:"40px" }} />}
        
      </div>
  



    </div>



  )
}


// bg-[#111827]
// bg-[#3B82F6]
// #1976D2