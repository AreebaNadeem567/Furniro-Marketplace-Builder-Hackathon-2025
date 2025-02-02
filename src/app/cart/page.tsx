// "use client";


// import React, { Suspense, useEffect, useState } from "react";
// import Image from "next/image";
// import { Trash } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import CartTotals from "../components/CartTotals";
// import Shopbottombar from "../components/Shpbottombar";
// import RelatedProducts from "../components/Relatedproducts";

// interface IProduct {
//   id: string;
//   productName: string;
//   productImage: string;
//   productPrice: number;
//   qty: number;
//   dicountPercentage: number;
// }

// function CartContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [cartItem, setCartItem] = useState<IProduct[]>([]);

//   useEffect(() => {
//     const cart = localStorage.getItem("cart");
//     const updatedCart = cart ? JSON.parse(cart) : [];

//     const id = searchParams.get("id");
//     const productName = searchParams.get("productName");
//     const productPrice = Number(searchParams.get("productPrice"));
//     const productImage = searchParams.get("productImage");
//     const qty = Number(searchParams.get("qty") || 1);
//     const dicountPercentage = Number(searchParams.get("dicountPercentage") || 0);

//     if (productName && productPrice && productImage && id) {
//       const isDuplicate = updatedCart.some(
//         (item: IProduct) => item.productName === productName
//       );
//       if (!isDuplicate) {
//         updatedCart.push({
//           id,
//           productName,
//           productImage,
//           productPrice,
//           qty,
//           dicountPercentage,
//         });
//       }
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       setCartItem(updatedCart);
//       router.replace("/cart");
//     }
//   }, [searchParams, router]);

//   function handleRemoveItem(index: number) {
//     const removedCard = [...cartItem];
//     removedCard.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(removedCard));
//     setCartItem(removedCard);
//   }

//   return (
//     <>
//       {/* Banner Section */}
//       <section className="bg-[url('/images/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 mb-6">
//         <div className="container mx-auto px-4 text-center">
//           <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
//           <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
//           <div className="flex items-center justify-center gap-2 text-sm">
//             <Link href="/" className="hover:underline">
//               Home /
//             </Link>
//             <span>Cart</span>
//           </div>
//         </div>
//       </section>

//       {/* Middle Section */}
//       <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
//         {/* Left Div - Cart Items */}
//         <div className="w-full lg:w-[817px]">
//           {cartItem.length > 0 ? (
//             <table className="w-full table-auto border-collapse border border-[#f9f1e7]">
//               {/* Table Header */}
//               <thead className="bg-[#f9f1e7] h-14 text-[16px] leading-[24px]">
//                 <tr>
//                   <th className="border border-[#f9f1e7] w-1/4 text-center">Product</th>
//                   <th className="border border-[#f9f1e7] w-1/4 text-center">Price</th>
//                   <th className="border border-[#f9f1e7] w-1/4 text-center">Quantity</th>
//                   <th className="border border-[#f9f1e7] w-1/4 text-center">SubTotal</th>
//                   <th className="border border-[#f9f1e7] w-1/4 text-center"></th>
//                 </tr>
//               </thead>

//               {/* Table Body */}
//               <tbody>
//                 {cartItem.map((item: IProduct, index) => (
//                   <tr key={index} className="text-center">
//                     {/* Product Details */}
//                     <td className="border border-[#f9f1e7] flex flex-col items-center justify-center gap-4 p-4">
//                       <Image
//                         src={item.productImage}
//                         alt={item.productName}
//                         width={108}
//                         height={105}
//                         className="max-w-full"
//                       />
//                       <p className="text-[#9f9f9f]">{item.productName}</p>
//                     </td>
//                     {/* Price */}
//                     <td className="border border-[#f9f1e7] text-[#9f9f9f]">Rs. {item.productPrice}</td>
//                     {/* Quantity */}
//                     <td className="text-[#9f9f9f] mb-10 flex justify-center items-center h-full">
//                       <Input
//                         type="number"
//                         value={item.qty}
//                         onChange={(e) => {
//                           const updatedCart = [...cartItem];
//                           updatedCart[index].qty = Number(e.target.value) || 1;
//                           setCartItem(updatedCart);
//                         }}
//                         className="w-16 text-center"
//                       />
//                     </td>
//                     {/* SubTotal */}
//                     <td className="border border-[#f9f1e7] text-[#9f9f9f]">
//                       Rs. {(item.productPrice * item.qty * (100 - item.dicountPercentage)) / 100}
//                     </td>

//                     {/* Action */}
//                     <td className="border border-[#f9f1e7]">
//                       <Button variant={"no"} onClick={() => handleRemoveItem(index)}>
//                         <Trash size={28} fill="#b88e2f" />
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
//           )}
//         </div>

//         {/* Right Div - Totals */}
//         <div className="w-full lg:w-[393px]">
//           <CartTotals
//             cartData={{
//               totalItems: cartItem.reduce((sum, item) => sum + item.qty, 0),
//               subTotal: cartItem.reduce((sum, item) => sum + item.productPrice * item.qty, 0),
//               totalPrice: cartItem.reduce(
//                 (sum, item) =>
//                   sum +
//                   (item.productPrice * item.qty * (100 - item.dicountPercentage)) / 100,
//                 0
//               ),
//               productName: cartItem.map(item => item.productName),
//               qty: cartItem.reduce((sum, item) => sum + item.qty, 0),
//             }}
//           />
//         </div>
//       </div>

//       <RelatedProducts />

//       <Shopbottombar />
//     </>
//   );
// }

// export default function Cart() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <CartContent />
//     </Suspense>
//   );
// }

///.............................



// "use client";

// import React, { Suspense, useEffect, useState } from "react";
// import Image from "next/image";
// import { ChevronRight, Trash } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import RelatedProducts from "../components/Relatedproducts";
// import Shopbottombar from "../components/Shpbottombar";

// // Define the CartItem type
// interface CartItem {
//   _id: string;
//   title: string;
//   price: number;
//   quantity: number;
//   productImage: string;
// }

// const Cart = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [subtotal, setSubtotal] = useState(0);
//   const discount = 500;
//   const total = subtotal - discount;

//   useEffect(() => {
//     // Retrieve cart data from localStorage
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
//     setCartItems(storedCart);

//     // Calculate subtotal
//     const totalSum = storedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setSubtotal(totalSum);
//   }, []);

//   const handleQuantityChange = (id: string, type: "increase" | "decrease") => {
//     const updatedCart = cartItems.map((item) => {
//       if (item._id === id) {
//         const newQuantity = type === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1);
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });

//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     // Recalculate subtotal
//     const totalSum = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setSubtotal(totalSum);
//   };

//   const handleRemoveItem = (index: number) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItems(updatedCart);

//     // Recalculate subtotal
//     const totalSum = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setSubtotal(totalSum);
//   };

//   return (
//     <>
//       {/* Banner Section */}
//       <section className="bg-[url('/images/comparison-bg.png')] bg-cover bg-center py-12 md:py-16 mb-6">
//         <div className="container mx-auto px-4 text-center">
//           <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
//           <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
//           <div className="flex items-center justify-center gap-2 text-sm">
//             <Link href="/" className="hover:underline">Home</Link>
//             <ChevronRight className="w-4 h-4" />
//             <span>Cart</span>
//           </div>
//         </div>
//       </section>

//       {/* Cart Content Section */}
//       <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
//         {/* Left Div - Cart Items */}
//         <div className="w-full lg:w-[817px] overflow-x-hidden">
//           {cartItems.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="min-w-full table-auto border-collapse border border-[#f9f1e7]">
//                 {/* Table Header */}
//                 <thead className="bg-[#f9f1e7] h-14 text-[16px] leading-[24px]">
//                   <tr>
//                     <th className="border border-[#f9f1e7] text-center p-2">Product</th>
//                     <th className="border border-[#f9f1e7] text-center p-2">Price</th>
//                     <th className="border border-[#f9f1e7] text-center p-2">Quantity</th>
//                     <th className="border border-[#f9f1e7] text-center p-2">SubTotal</th>
//                     <th className="border border-[#f9f1e7] text-center p-2"></th>
//                   </tr>
//                 </thead>

//                 {/* Table Body */}
//                 <tbody>
//                   {cartItems.map((item: CartItem, index) => (
//                     <tr key={index} className="text-center">
//                       {/* Product Details */}
//                       <td className="border border-[#f9f1e7] flex flex-col items-center justify-center gap-4 p-2">
//                         <Image
//                           src={item.productImage}
//                           alt={item.title}
//                           width={108}
//                           height={105}
//                           className="max-w-full"
//                         />
//                         <p className="text-[#9f9f9f]">{item.title}</p>
//                       </td>
//                       {/* Price */}
//                       <td className="border border-[#f9f1e7] text-[#9f9f9f] p-2">Rs. {item.price}</td>
//                       {/* Quantity */}
//                       <td className="border border-[#f9f1e7] text-[#9f9f9f] p-2 flex justify-center items-center gap-4">
//                         {/* Decrease Button */}
//                         <Button
//                           variant="no"
//                           onClick={() => handleQuantityChange(item._id, "decrease")}
//                           className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full"
//                         >
//                           -
//                         </Button>

//                         {/* Quantity Input */}
//                         <Input
//                           type="number"
//                           value={item.quantity}
//                           onChange={(e) => {
//                             const updatedCart = [...cartItems];
//                             updatedCart[index].quantity = Number(e.target.value) || 1;
//                             setCartItems(updatedCart);
//                             localStorage.setItem("cart", JSON.stringify(updatedCart));

//                             // Recalculate subtotal
//                             const totalSum = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//                             setSubtotal(totalSum);
//                           }}
//                           className="w-16 text-center border-none"
//                         />
                         
//                         {/* Increase Button */}
//                         <Button
//                           variant="no"
//                           onClick={() => handleQuantityChange(item._id, "increase")}
//                           className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full"
//                         >
//                           +
//                         </Button>
//                       </td>
//                       {/* SubTotal */}
//                       <td className="border border-[#f9f1e7] text-[#9f9f9f] p-2">
//                         Rs. {item.price * item.quantity}
//                       </td>

//                       {/* Action */}
//                       <td className="border border-[#f9f1e7] p-2">
//                         <Button variant={"no"} onClick={() => handleRemoveItem(index)}>
//                           <Trash size={28} fill="#b88e2f" />
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
//           )}
//         </div>

//         {/* Right Div - Totals */}
//         <div className="w-full lg:w-[393px] mt-6 lg:mt-0">
//           <div className="p-4 bg-gray-200 rounded-lg">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">Total Amount</h1>
//             <p className="text-lg">Subtotal: <span className="font-semibold">Rs. {subtotal}</span></p>
//             <p className="text-lg">Discount: <span className="text-green-600">-Rs. {discount}</span></p>
//             <p className="text-xl font-bold">Total: Rs. {total}</p>
//             <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
//               Check Out
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <RelatedProducts />
//     </>
//   );
// }

// export default function CartPage() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Cart />
//     </Suspense>
//   );
// }













"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import RelatedProducts from "../components/Relatedproducts";

// Define the CartItem type
interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  productImage: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const discount = 500; // Fixed discount (can be dynamic later)
  const total = subtotal - discount;

  useEffect(() => {
    // Retrieve cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    setCartItems(storedCart);

    // Calculate subtotal
    const totalSum = storedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(totalSum);
  }, []);

  const handleQuantityChange = (id: string, type: "increase" | "decrease") => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id) {
        const newQuantity = type === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate subtotal
    const totalSum = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(totalSum);
  };

  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);

    // Recalculate subtotal
    const totalSum = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(totalSum);
  };

  return (
    <>
      {/* Banner Section */}
      <section className="bg-[url('/images/comparison-bg.png')] bg-cover bg-center py-12 md:py-16 mb-6">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Cart</span>
          </div>
        </div>
      </section>

      {/* Cart Content Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
        {/* Left Div - Cart Items */}
        <div className="w-full lg:w-[817px] overflow-x-hidden">
          {cartItems.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-[#f9f1e7]">
                {/* Table Header */}
                <thead className="bg-[#f9f1e7] h-14 text-[16px] leading-[24px]">
                  <tr>
                    <th className="border border-[#f9f1e7] text-center p-2">Product</th>
                    <th className="border border-[#f9f1e7] text-center p-2">Price</th>
                    <th className="border border-[#f9f1e7] text-center p-2">Quantity</th>
                    <th className="border border-[#f9f1e7] text-center p-2">SubTotal</th>
                    <th className="border border-[#f9f1e7] text-center p-2"></th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {cartItems.map((item: CartItem, index) => (
                    <tr key={index} className="text-center">
                      {/* Product Details */}
                      <td className="border border-[#f9f1e7] flex flex-col items-center justify-center gap-4 p-2">
                        <Image
                          src={item.productImage}
                          alt={item.title}
                          width={108}
                          height={105}
                          className="max-w-full"
                        />
                        <p className="text-[#9f9f9f]">{item.title}</p>
                      </td>
                      {/* Price */}
                      <td className="border border-[#f9f1e7] text-[#9f9f9f] p-2">Rs. {item.price}</td>
                      {/* Quantity */}
                      <td className="border border-[#f9f1e7] text-[#9f9f9f] p-2 flex justify-center items-center gap-4">
                        {/* Decrease Button */}
                        <Button
                          variant="no"
                          onClick={() => handleQuantityChange(item._id, "decrease")}
                          className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full"
                        >
                          -
                        </Button>

                        {/* Quantity Input */}
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => {
                            const updatedCart = [...cartItems];
                            updatedCart[index].quantity = Number(e.target.value) || 1;
                            setCartItems(updatedCart);
                            localStorage.setItem("cart", JSON.stringify(updatedCart));

                            // Recalculate subtotal
                            const totalSum = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
                            setSubtotal(totalSum);
                          }}
                          className="w-16 text-center border-none"
                        />

                        {/* Increase Button */}
                        <Button
                          variant="no"
                          onClick={() => handleQuantityChange(item._id, "increase")}
                          className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full"
                        >
                          +
                        </Button>
                      </td>
                      {/* SubTotal */}
                      <td className="border border-[#f9f1e7] text-[#9f9f9f] p-2">
                        Rs. {item.price * item.quantity}
                      </td>

                      {/* Action */}
                      <td className="border border-[#f9f1e7] p-2">
                        <Button variant={"no"} onClick={() => handleRemoveItem(index)}>
                          <Trash size={28} fill="#b88e2f" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Right Div - Totals */}
        <div className="w-full lg:w-[393px] mt-6 lg:mt-0">
          <div className="p-4 bg-gray-200 rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Total Amount</h1>
            <p className="text-lg">Subtotal: <span className="font-semibold">Rs. {subtotal}</span></p>
            <p className="text-lg">Discount: <span className="text-green-600">-Rs. {discount}</span></p>
            <p className="text-xl font-bold">Total: Rs. {total}</p>
            <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
              Check Out
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts />
    </>
  );
};

export default Cart;
















// "use client"

// // pages/cart.js
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Button } from '../components/ui/button';

// interface CartItem {
//   productImage: string;
//   title: string;
//   price: number;
// }

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     // Fetch cart items from localStorage
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCartItems(storedCart);
//   }, []);

//   const handleRemoveItem = (index: number) => {
//     // Remove item from cart
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     setCartItems(updatedCart);
//   };

//   const handleCheckout = () => {
//     // Placeholder for checkout logic
//     alert('Proceeding to checkout');
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
//       {cartItems.length > 0 ? (
//         <div>
//           {cartItems.map((item, index) => (
//             <div key={index} className="flex items-center mb-4 border-b py-4">
//               <Image src={item.productImage} alt={item.title} width={100} height={100} />
//               <div className="ml-4">
//                 <h2 className="text-xl font-semibold">{item.title}</h2>
//                 <p className="text-gray-500">Price: Rs. {item.price}</p>
//               </div>
//               <Button onClick={() => handleRemoveItem(index)}>Remove</Button>
//             </div>
//           ))}
          
//           {/* Checkout Button */}
//           <div className="mt-6">
//             <button onClick={handleCheckout} className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;
