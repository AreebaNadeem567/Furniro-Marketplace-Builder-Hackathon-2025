import React from 'react'
import Hero from './Hero'
import Browse from './Browse'
import Rooms from './Rooms'
import Furniture from './Furniture'
import Products from './OurProducts'
// import Wishlist from '../Wishslist/page'
import CheckoutPage from '../payment/page'


function LandingPage() {
  return (
    <div>
        <Hero/>
        <Browse/>
        <Products  />
        <CheckoutPage />
       {/* < CheckoutPage /> */}
        {/* <Wishlist /> */}
        {/* <ProductCard  /> */}
        <Rooms/>
        <Furniture/>
    </div>
  )
}

export default LandingPage