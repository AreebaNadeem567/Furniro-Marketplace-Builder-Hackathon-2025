import React from 'react'
import Hero from './Hero'
import Browse from './Browse'
import Rooms from './Rooms'
import Furniture from './Furniture'
import Products from './OurProducts'
// import WhistlePage from '../Wishslist/page'


function LandingPage() {
  return (
    <div>
        <Hero/>
        <Browse/>
        <Products  />
       {/* <WhistlePage /> */}
        {/* <ProductCard  /> */}
        <Rooms/>
        <Furniture/>
    </div>
  )
}

export default LandingPage