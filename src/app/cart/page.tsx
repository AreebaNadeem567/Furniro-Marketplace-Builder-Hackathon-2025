// 'use client'

// import { ChevronDown, ChevronRight } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// const features = [
//     {
//       icon: '/images/trophy.png',
//       title: 'High Quality',
//       description: 'crafted from top materials'
//     },
//     {
//       icon: '/images/tick.png',
//       title: 'Warranty Protection',
//       description: 'Over 2 years'
//     },
//     {
//       icon: '/images/gift.png',
//       title: 'Free Shipping',
//       description: 'Order over 150 $'
//     },
//     {
//       icon: '/images/support.png',
//       title: '24 / 7 Support',
//       description: 'Dedicated support'
//     }
//   ]

// export default function Checkout() {
//   return (
//     <>
//     <div className="relative h-[300px] w-full mb-10">
//         <Image
//           src="/images/comparison-bg.png"
//           alt="Comparison background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 " />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <Image
//             src="/images/logo-short.png"
//             alt="Logo"
//             width={70}
//             height={70}
//             quality={100}
//             className="mb-0"
//           />
//           <h1 className="text-4xl font-semibold mb-4">Checkout</h1>
//           <div className="flex items-center gap-2 text-sm">
//             <Link href="/" className="hover:underline">
//               Home
//             </Link>
//             <ChevronRight className="w-4 h-4" />
//             <span>Checkout</span>
//           </div>
//         </div>
//       </div>
//     <div className="max-w-6xl mx-auto px-4 py-8 font-poppins">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//         {/* Billing Details Form */}
//         <div className="space-y-6">
//           <h2 className="text-2xl font-medium mb-8">Billing details</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <label className="text-sm">First Name</label>
//               <input
//                 type="text"
//                 className="w-full p-3 border rounded-lg"
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="text-sm">Last Name</label>
//               <input
//                 type="text"
//                 className="w-full p-3 border rounded-lg"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm">Company Name (Optional)</label>
//             <input
//               type="text"
//               className="w-full p-3 border rounded-lg"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm">Country / Region</label>
//             <div className="relative">
//               <select className="w-full p-3 border rounded-lg appearance-none bg-white">
//                 <option>Sri Lanka</option>
//                 <option>Pakistan</option>
//                 <option>Bangladesh</option>
//                 {/* Add other countries */}
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm">Street address</label>
//             <input
//               type="text"
//               className="w-full p-3 border rounded-lg"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm">Town / City</label>
//             <input
//               type="text"
//               className="w-full p-3 border rounded-lg"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm">Province</label>
//             <div className="relative">
//               <select className="w-full p-3 border rounded-lg appearance-none bg-white">
//                 <option>Western Province</option>
//                 <option>Easter Province</option>
//                 <option>Southern Province</option>
//                 {/* Add other provinces */}
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm">ZIP code</label>
//             <input
//               type="text"
//               className="w-full p-3 border rounded-lg"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm">Phone</label>
//             <input
//               type="tel"
//               className="w-full p-3 border rounded-lg"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm">Email address</label>
//             <input
//               type="email"
//               className="w-full p-3 border rounded-lg"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm">Additional information</label>
//             <textarea
//               placeholder="Additional Information"
//               className="w-full p-3 border rounded-lg resize-none"
//             />
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="space-y-8">
//           <div className="space-y-4">
//             <div className="flex justify-between text-sm md:text-base">
//               <span className='text-base lg:text-2xl font-poppinsSemiBold'>Product</span>
//               <span className='text-base lg:text-2xl font-poppinsSemiBold'>Subtotal</span>
//             </div>
            
//             <div className="flex justify-between items-center py-4  text-sm md:text-base">
//               <div className="space-y-1">
//                 <p className=''><span className='text-lightGray'>Asgaard Sofa </span> x 1</p>
                
//               </div>
//               <span>Rs. 250,000.00</span>
//             </div>

//             <div className="flex justify-between text-sm md:text-base">
//               <span>Subtotal</span>
//               <span>Rs. 250,000.00</span>
//             </div>

//             <div className="flex justify-between font-medium">
//               <span>Total</span>
//               <span className="text-brown lg:text-xl font-poppinsSemiBold">Rs. 250,000.00</span>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <input type="radio" id="bank-transfer" name="payment" defaultChecked />
//                 <label htmlFor="bank-transfer" className="text-sm">Direct Bank Transfer</label>
//               </div>
//               <p className="text-sm text-gray-500 ml-6">
//                 Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//               </p>
              
//               <div className="flex items-center space-x-2">
//                 <input type="radio" id="cash" name="payment" />
//                 <label htmlFor="cash" className="text-sm">Cash On Delivery</label>
//               </div>
//             </div>

//             <p className="text-sm">
//               Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
//               <Link href="/privacy-policy" className="text-black underline">
//                 privacy policy
//               </Link>
//               .
//             </p>

//             <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800">
//               Place order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="w-full bg-[#FAF3EA] mx-auto px-4 py-16 mt-6 pl-6 lg:pl-0">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           {features.map((feature) => (
//             <div 
//               key={feature.title} 
//               className="flex items-center gap-4 pl-8 md:pl-0"
//             >
//               <div className="mb-4">
//                 <Image
//                   src={feature.icon}
//                   alt={feature.title}
//                   width={60}
//                   height={60}
//                   quality={100}
//                 />
//               </div>
//               <div className='flex flex-col'>
//               <h3 className="text-[#333333] text-xl font-semibold mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-[#666666] text-base">
//                 {feature.description}
//               </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </>
//   )
// }

// .........................


"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import CartTotals from "../components/CartTotals";
import Shopbottombar from "../components/Shpbottombar";
import RelatedProducts from "../components/Relatedproducts";

interface IProduct {
  id: string;
  productName: string;
  productImage: string;
  productPrice: number;
  qty: number;
  dicountPercentage: number;
}

function CartContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [cartItem, setCartItem] = useState<IProduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const updatedCart = cart ? JSON.parse(cart) : [];

    const id = searchParams.get("id");
    const productName = searchParams.get("productName");
    const productPrice = Number(searchParams.get("productPrice"));
    const productImage = searchParams.get("productImage");
    const qty = Number(searchParams.get("qty") || 1);
    const dicountPercentage = Number(searchParams.get("dicountPercentage") || 0);

    if (productName && productPrice && productImage && id) {
      const isDuplicate = updatedCart.some(
        (item: IProduct) => item.productName === productName
      );
      if (!isDuplicate) {
        updatedCart.push({
          id,
          productName,
          productImage,
          productPrice,
          qty,
          dicountPercentage,
        });
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItem(updatedCart);
      router.replace("/cart");
    }
  }, [searchParams, router]);

  function handleRemoveItem(index: number) {
    const removedCard = [...cartItem];
    removedCard.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(removedCard));
    setCartItem(removedCard);
  }

  return (
    <>
      {/* Banner Section */}
      <section className="bg-[url('/images/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 mb-6">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home /
            </Link>
            <span>Cart</span>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
        {/* Left Div - Cart Items */}
        <div className="w-full lg:w-[817px]">
          {cartItem.length > 0 ? (
            <table className="w-full table-auto border-collapse border border-[#f9f1e7]">
              {/* Table Header */}
              <thead className="bg-[#f9f1e7] h-14 text-[16px] leading-[24px]">
                <tr>
                  <th className="border border-[#f9f1e7] w-1/4 text-center">Product</th>
                  <th className="border border-[#f9f1e7] w-1/4 text-center">Price</th>
                  <th className="border border-[#f9f1e7] w-1/4 text-center">Quantity</th>
                  <th className="border border-[#f9f1e7] w-1/4 text-center">SubTotal</th>
                  <th className="border border-[#f9f1e7] w-1/4 text-center"></th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {cartItem.map((item: IProduct, index) => (
                  <tr key={index} className="text-center">
                    {/* Product Details */}
                    <td className="border border-[#f9f1e7] flex flex-col items-center justify-center gap-4 p-4">
                      <Image
                        src={item.productImage}
                        alt={item.productName}
                        width={108}
                        height={105}
                        className="max-w-full"
                      />
                      <p className="text-[#9f9f9f]">{item.productName}</p>
                    </td>
                    {/* Price */}
                    <td className="border border-[#f9f1e7] text-[#9f9f9f]">Rs. {item.productPrice}</td>
                    {/* Quantity */}
                    <td className="text-[#9f9f9f] mb-10 flex justify-center items-center h-full">
                      <Input
                        type="number"
                        value={item.qty}
                        onChange={(e) => {
                          const updatedCart = [...cartItem];
                          updatedCart[index].qty = Number(e.target.value) || 1;
                          setCartItem(updatedCart);
                        }}
                        className="w-16 text-center"
                      />
                    </td>
                    {/* SubTotal */}
                    <td className="border border-[#f9f1e7] text-[#9f9f9f]">
                      Rs. {(item.productPrice * item.qty * (100 - item.dicountPercentage)) / 100}
                    </td>

                    {/* Action */}
                    <td className="border border-[#f9f1e7]">
                      <Button variant={"no"} onClick={() => handleRemoveItem(index)}>
                        <Trash size={28} fill="#b88e2f" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Right Div - Totals */}
        <div className="w-full lg:w-[393px]">
          <CartTotals
            cartData={{
              totalItems: cartItem.reduce((sum, item) => sum + item.qty, 0),
              subTotal: cartItem.reduce((sum, item) => sum + item.productPrice * item.qty, 0),
              totalPrice: cartItem.reduce(
                (sum, item) =>
                  sum +
                  (item.productPrice * item.qty * (100 - item.dicountPercentage)) / 100,
                0
              ),
              productName: cartItem.map(item => item.productName),
              qty: cartItem.reduce((sum, item) => sum + item.qty, 0),
            }}
          />
        </div>
      </div>

      <RelatedProducts />

      <Shopbottombar />
    </>
  );
}

export default function Cart() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartContent />
    </Suspense>
  );
}