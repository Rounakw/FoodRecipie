import Navbar from './assets/Components/Navbar/Navbar'
import Footer from './assets/Components/Footer/Footer'
import React from 'react'
import { Outlet } from 'react-router'
// import <Outlet></Outlet>

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default Layout