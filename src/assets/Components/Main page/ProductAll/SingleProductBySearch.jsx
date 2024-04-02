import React from 'react'
import { useParams } from 'react-router'
import ProductAll from './ProductAll'
import './Single.css'
function SingleProductBySearch() {
    let {id} = useParams()

  return (
    <>
    {/* <div>SingleProductBySearch{id}</div> */}
    <ProductAll product={id}/>
    </>

  )
}

export default SingleProductBySearch