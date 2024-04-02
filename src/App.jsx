import Layout from './Layout'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import Home from './assets/Components/Main page/Home/Home'

import ProductAll from './assets/Components/Main page/ProductAll/ProductAll'
import SingleProductBySearch from './assets/Components/Main page/ProductAll/SingleProductBySearch'
import MetaData from './assets/Components/Main page/MetaData/MetaData'
function App() {



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path="Recipie" element={<div>Recipie</div>}></Route>
      <Route path="Store" element={<div>Store page Unavailable</div>}></Route>
      <Route path="Contact" element={<div>Contact Us page Unavailable</div>}></Route>
      <Route path="Product-all-burgers" element={<ProductAll product={"burger"}/>}></Route>
      <Route path="Product-all-pizza" element={<ProductAll product={"pizza"}/>}></Route>
      <Route path="Product-all-pasta" element={<ProductAll product={"pasta"}/>}></Route>
      <Route path="Recipie/:id" element={<SingleProductBySearch/>}></Route>
      <Route path="Recipie/food/:id" element={<MetaData/>}></Route>
    </Route>
  )
)

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
