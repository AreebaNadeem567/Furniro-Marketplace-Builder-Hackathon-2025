// 'use client'

// import { useState } from 'react'
// import { ChevronRight } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import jsPDF from 'jspdf'

// const features = [
//   {
//     icon: '/images/trophy.png',
//     title: 'High Quality',
//     description: 'crafted from top materials'
//   },
//   {
//     icon: '/images/tick.png',
//     title: 'Warranty Protection',
//     description: 'Over 2 years'
//   },
//   {
//     icon: '/images/gift.png',
//     title: 'Free Shipping',
//     description: 'Order over 150 $'
//   },
//   {
//     icon: '/images/support.png',
//     title: '24 / 7 Support',
//     description: 'Dedicated support'
//   }
// ]

// export default function Checkout() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     companyName: '',
//     country: 'Sri Lanka',
//     address: '',
//     city: '',
//     province: 'Western Province',
//     zip: '',
//     phone: '',
//     email: '',
//     additionalInfo: ''
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleChange = (e: { target: { name: any; value: any } }) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
//   }

//   const handleSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault()
//     setIsSubmitted(true)
//   }

//   const handleDownload = () => {
//     const doc = new jsPDF()
//     doc.text('Shipment Information', 10, 10)
//     Object.entries(formData).forEach(([key, value], index) => {
//       doc.text(`${key}: ${value}`, 10, 20 + index * 10)
//     })
//     doc.save('shipment-info.pdf')
//   }

//   return (
//     <>
//       <div className="relative h-[300px] w-full mb-10 overflow-hidden">
//         <Image
//           src="/images/comparison-bg.png"
//           alt="Comparison background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0" />
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
//       <div className="max-w-full mx-auto px-4 py-8 font-poppins">
//         {!isSubmitted ? (
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//               {/* Billing Details Form */}
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-medium mb-8">Billing details</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label className="text-sm">First Name</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm">Last Name</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Company Name (Optional)</label>
//                   <input
//                     type="text"
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Country / Region</label>
//                   <select
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                   >
//                     <option>Sri Lanka</option>
//                     <option>Pakistan</option>
//                     <option>Bangladesh</option>
//                   </select>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Street Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Town / City</label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Province</label>
//                   <select
//                     name="province"
//                     value={formData.province}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                   >
//                     <option>Western Province</option>
//                     <option>Easter Province</option>
//                     <option>Southern Province</option>
//                   </select>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">ZIP Code</label>
//                   <input
//                     type="text"
//                     name="zip"
//                     value={formData.zip}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Phone</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Additional Information</label>
//                   <textarea
//                     name="additionalInfo"
//                     value={formData.additionalInfo}
//                     onChange={handleChange}
//                     placeholder="Additional Information"
//                     className="w-full p-3 border rounded-lg resize-none"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         ) : (
//           // Shipment Information display after submission
//           <div className="space-y-6">
//             <h2 className="text-2xl font-medium">Shipment Information</h2>
//             <div className="space-y-4">
//               {Object.entries(formData).map(([key, value]) => (
//                 <p key={key}>
//                   <strong>{key}: </strong>
//                   {value}
//                 </p>
//               ))}
//             </div>
//             <button
//               onClick={handleDownload}
//               className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800"
//             >
//               Download PDF
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   )
//  }

// "use client";

// import React, { useState, useEffect } from "react";

// interface CartItem {
//   _id: string;
//   title: string;
//   price: number;
//   quantity: number;
//   totalPrice: number;
// }

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [selectedPayment, setSelectedPayment] = useState<string>("bank");

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartItems(storedCart);
//   }, []);

//   const calculateSubtotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
//   };

//   return (
//     <div className="flex flex-col md:flex-row-reverse max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       {/* Right Sidebar - Order Summary & Payment */}
//       <div className="w-full md:w-1/3 p-4 border-l">
//         <h2 className="text-xl font-bold mb-4">Order Summary</h2>

//         {/* Product List inside Order Summary */}
//         <div className="border-b pb-4">
//           {cartItems.map((item) => (
//             <div key={item._id} className="flex justify-between py-2">
//               <span className="text-gray-700 font-medium">
//                 {item.title} x {item.quantity}
//               </span>
//               <span className="text-gray-900 font-semibold">
//                 Rs. {item.totalPrice.toFixed(2)}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Subtotal and Total */}
//         <div className="py-2">
//           <div className="flex justify-between text-lg font-medium">
//             <span>Subtotal</span>
//             <span>Rs. {calculateSubtotal().toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between text-xl font-bold text-yellow-600 mt-2">
//             <span>Total</span>
//             <span>Rs. {calculateSubtotal().toFixed(2)}</span>
//           </div>
//         </div>

//         {/* Payment Method */}
//         <div className="mt-4 p-4 border rounded-lg bg-gray-100">
//           <label className="flex items-center justify-between space-x-2 cursor-pointer">
//             <span className="font-medium">Direct Bank Transfer</span>
//             <input
//               type="radio"
//               name="payment"
//               value="bank"
//               checked={selectedPayment === "bank"}
//               onChange={() => setSelectedPayment("bank")}
//               className="form-radio text-blue-600"
//             />
//           </label>
//           <p className="text-sm text-gray-600 pl-2">
//             Make your payment directly into our bank account. Please use your Order ID as the reference. Your order will not be shipped until payment clears.
//           </p>

//           <label className="flex items-center justify-between space-x-2 mt-3 cursor-pointer">
//             <span className="font-medium">Cash On Delivery</span>
//             <input
//               type="radio"
//               name="payment"
//               value="cod"
//               checked={selectedPayment === "cod"}
//               onChange={() => setSelectedPayment("cod")}
//               className="form-radio text-blue-600"
//             />
//           </label>
//         </div>

//         {/* Privacy Notice */}
//         <p className="text-sm text-gray-600 mt-4">
//           Your personal data will be used to support your experience, manage access to your account, and for other purposes described in our{" "}
//           <a href="#" className="text-blue-600">
//             privacy policy
//           </a>
//           .
//         </p>

//         {/* Place Order Button */}
//         <button className="mt-4 w-full bg-black text-white py-2 rounded-lg font-semibold text-lg">
//           Place order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

// "use client"

// import { useState, useEffect } from "react"
// import { ChevronRight } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import jsPDF from "jspdf"
// import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
// import { Label } from "@radix-ui/react-select"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"

// interface CartItem {
//   _id: string
//   title: string
//   price: number
//   quantity: number
//   totalPrice: number
// }

// interface ShippingMethod {
//   id: string
//   name: string
//   description: string
//   price: number
// }

// const shippingMethods: ShippingMethod[] = [
//   { id: "standard", name: "Standard Shipping", description: "3-5 business days", price: 500 },
//   { id: "express", name: "Express Shipping", description: "1-2 business days", price: 1000 },
//   { id: "overnight", name: "Overnight Shipping", description: "Next business day", price: 2000 },
// ]

// export default function Checkout() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     companyName: "",
//     country: "Sri Lanka",
//     address: "",
//     city: "",
//     province: "Western Province",
//     zip: "",
//     phone: "",
//     email: "",
//     additionalInfo: "",
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [cartItems, setCartItems] = useState<CartItem[]>([])
//   const [selectedPayment, setSelectedPayment] = useState<string>("bank")
//   const [selectedShipping, setSelectedShipping] = useState<string>("standard")

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
//     setCartItems(storedCart)
//   }, [])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitted(true)
//   }

//   const handleDownload = () => {
//     const doc = new jsPDF()
//     doc.setFontSize(16)
//     doc.text("Order Information", 10, 10)

//     doc.setFontSize(12)
//     doc.text("Billing Information:", 10, 20)
//     Object.entries(formData).forEach(([key, value], index) => {
//       doc.text(`${key}: ${value}`, 10, 30 + index * 7)
//     })

//     const selectedShippingMethod = shippingMethods.find((method) => method.id === selectedShipping)
//     doc.text(
//       `Shipping Method: ${selectedShippingMethod?.name} - Rs. ${selectedShippingMethod?.price.toFixed(2)}`,
//       10,
//       140,
//     )
//     doc.text(`Payment Method: ${selectedPayment === "bank" ? "Direct Bank Transfer" : "Cash On Delivery"}`, 10, 150)

//     doc.save("order-info.pdf")
//   }

//   const calculateSubtotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.totalPrice, 0)
//   }

//   const calculateTotal = () => {
//     const subtotal = calculateSubtotal()
//     const shippingCost = shippingMethods.find((method) => method.id === selectedShipping)?.price || 0
//     return subtotal + shippingCost
//   }

//   return (
//     <>
//       <div className="relative h-[300px] w-full mb-10 overflow-hidden">
//         <Image src="/images/comparison-bg.png" alt="Comparison background" fill className="object-cover" priority />
//         <div className="absolute inset-0" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <Image src="/images/logo-short.png" alt="Logo" width={70} height={70} quality={100} className="mb-0" />
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
//       <div className="max-w-7xl mx-auto px-4 py-8 font-poppins">
//         {!isSubmitted ? (
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
//               {/* Billing Details Form */}
//               <div className="lg:col-span-2 space-y-6">
//                 <h2 className="text-2xl font-medium mb-8">Billing details</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label className="text-sm">First Name</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm">Last Name</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Company Name (Optional)</label>
//                   <input
//                     type="text"
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Country / Region</label>
//                   <select
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                     required
//                   >
//                     <option value="Sri Lanka">Sri Lanka</option>
//                     <option value="Pakistan">Pakistan</option>
//                     <option value="Bangladesh">Bangladesh</option>
//                   </select>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Street Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Town / City</label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Province</label>
//                   <select
//                     name="province"
//                     value={formData.province}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                     required
//                   >
//                     <option value="Western Province">Western Province</option>
//                     <option value="Eastern Province">Eastern Province</option>
//                     <option value="Southern Province">Southern Province</option>
//                   </select>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">ZIP Code</label>
//                   <input
//                     type="text"
//                     name="zip"
//                     value={formData.zip}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Phone</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm">Additional Information</label>
//                   <textarea
//                     name="additionalInfo"
//                     value={formData.additionalInfo}
//                     onChange={handleChange}
//                     placeholder="Additional Information"
//                     className="w-full p-3 border rounded-lg resize-none"
//                   />
//                 </div>

//                 <Card className="mt-8">
//                   <CardHeader>
//                     <CardTitle>Shipping Method</CardTitle>
//                     <CardDescription>Choose your preferred shipping option</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <RadioGroup defaultValue="standard" value={selectedShipping} onValueChange={setSelectedShipping}>
//                       {shippingMethods.map((method) => (
//                         <div key={method.id} className="flex items-center space-x-2">
//                           <RadioGroupItem value={method.id} id={method.id} />
//                           <label htmlFor={method.id} className="flex justify-between w-full">
//                             <div>
//                               <p className="font-medium">{method.name}</p>
//                               <p className="text-sm text-gray-500">{method.description}</p>
//                             </div>
//                             <p className="font-medium">Rs. {method.price.toFixed(2)}</p>
//                           </label>
//                         </div>
//                       ))}
//                     </RadioGroup>
//                   </CardContent>
//                 </Card>
//                 {/* <button
//                   onClick={handleDownload}
//                   className="w-full bg-blue-600 text-white py-3 px-3 rounded-lg hover:bg-blue-700 mt-8"
//                 >
//                   Download Order Information
//                 </button> */}
//                 <button
//   onClick={handleDownload}
//   className="w-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mt-4 text-sm"
// >
//   Download Order Information
// </button>

//               </div>

//               {/* Order Summary & Payment */}
//               <div className="lg:col-span-1 space-y-6">
//                 <div className="p-4 border rounded-lg">
//                   <h2 className="text-xl font-bold mb-4">Order Summary</h2>

//                   {/* Product List inside Order Summary */}
//                   <div className="border-b pb-4">
//                     {cartItems.map((item) => (
//                       <div key={item._id} className="flex justify-between py-2">
//                         <span className="text-gray-700 font-medium">
//                           {item.title} x {item.quantity}
//                         </span>
//                         <span className="text-gray-900 font-semibold">Rs. {item.totalPrice.toFixed(2)}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Subtotal, Shipping, and Total */}
//                   <div className="py-2">
//                     <div className="flex justify-between text-lg font-medium">
//                       <span>Subtotal</span>
//                       <span>Rs. {calculateSubtotal().toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-lg font-medium mt-2">
//                       <span>Shipping</span>
//                       <span>
//                         Rs. {shippingMethods.find((method) => method.id === selectedShipping)?.price.toFixed(2)}
//                       </span>
//                     </div>
//                     <div className="flex justify-between text-xl font-bold text-yellow-600 mt-2">
//                       <span>Total</span>
//                       <span>Rs. {calculateTotal().toFixed(2)}</span>
//                     </div>
//                   </div>

//                   {/* Payment Method */}
//                   <div className="mt-4 p-4 border rounded-lg bg-gray-100">
//                     <label className="flex items-center justify-between space-x-2 cursor-pointer">
//                       <span className="font-medium">Direct Bank Transfer</span>
//                       <input
//                         type="radio"
//                         name="payment"
//                         value="bank"
//                         checked={selectedPayment === "bank"}
//                         onChange={() => setSelectedPayment("bank")}
//                         className="form-radio text-blue-600"
//                       />
//                     </label>
//                     <p className="text-sm text-gray-600 pl-2">
//                       Make your payment directly into our bank account. Please use your Order ID as the reference. Your
//                       order will not be shipped until payment clears.
//                     </p>

//                     <label className="flex items-center justify-between space-x-2 mt-3 cursor-pointer">
//                       <span className="font-medium">Cash On Delivery</span>
//                       <input
//                         type="radio"
//                         name="payment"
//                         value="cod"
//                         checked={selectedPayment === "cod"}
//                         onChange={() => setSelectedPayment("cod")}
//                         className="form-radio text-blue-600"
//                       />
//                     </label>
//                   </div>

//                   {/* Privacy Notice */}
//                   <p className="text-sm text-gray-600 mt-4">
//                     Your personal data will be used to support your experience, manage access to your account, and for
//                     other purposes described in our{" "}
//                     <a href="#" className="text-blue-600">
//                       privacy policy
//                     </a>
//                     .
//                   </p>

//                   {/* Place Order Button */}
//                   <button
//                     type="submit"
//                     className="mt-4 w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800"
//                   >
//                     Place order
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         ) : (
//           // Order Information display after submission
//           <div className="space-y-6">
//             <h2 className="text-2xl font-medium">Order Information</h2>
//             <div className="space-y-4">
//               <h3 className="text-xl font-medium">Billing Information</h3>
//               {Object.entries(formData).map(([key, value]) => (
//                 <p key={key}>
//                   <strong>{key}: </strong>
//                   {value}
//                 </p>
//               ))}

//               <h3 className="text-xl font-medium mt-6">Shipping Method</h3>
//               <p>
//                 {shippingMethods.find((method) => method.id === selectedShipping)?.name} - Rs.{" "}
//                 {shippingMethods.find((method) => method.id === selectedShipping)?.price.toFixed(2)}
//               </p>
//             </div>
//             <button
//               onClick={handleDownload}
//               className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800"
//             >
//               Download Order Information PDF
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import jsPDF from "jspdf";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Sri Lanka",
    address: "",
    city: "",
    province: "Western Province",
    zip: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Order Information", 10, 10);

    doc.setFontSize(12);
    doc.text("Billing Information:", 10, 20);
    Object.entries(formData).forEach(([key, value], index) => {
      doc.text(`${key}: ${value}`, 10, 30 + index * 7);
    });

    const subtotal = calculateSubtotal();
    doc.text(`Subtotal: Rs. ${subtotal.toFixed(2)}`, 10, 120);
    doc.text(`Total: Rs. ${calculateTotal().toFixed(2)}`, 10, 130);

    doc.save("order-info.pdf");
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal;
  };

  const removeItem = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item._id !== itemId));
  };

  return (
    <div>
      <div className="relative h-[300px] w-full mb-10 overflow-hidden">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-0"
          />
          <h1 className="text-4xl font-semibold mb-4">Checkout</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="w-4 h-4">→</span>
            <span>Checkout</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 font-poppins">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Billing Details Form */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium mb-8">Billing details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Company Name (Optional)</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Country / Region</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  >
                    <option>Sri Lanka</option>
                    <option>Pakistan</option>
                    <option>Bangladesh</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Town / City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Province</label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  >
                    <option>Western Province</option>
                    <option>Easter Province</option>
                    <option>Southern Province</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm">ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Additional Information"
                    className="w-full p-3 border rounded-lg resize-none"
                  />
                </div>
                <button
                  type="submit"
                  // className="w-full bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-800 text-sm">
                 className="bg-gradient-to-r bg-yellow-500 text-white py-2 px-8 hover:from-yellow-600">
                  Submit
                </button>
              </div>

              {/* Order Summary Card */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mt-4">
                      {cartItems.map((item) => (
                        <div
                          key={item._id}
                          className="flex justify-between items-center"
                        >
                          <p>
                            {item.title} x {item.quantity}
                          </p>
                          <p>Rs. {item.totalPrice.toFixed(2)}</p>
                          <button
                            onClick={() => removeItem(item._id)}
                            className="text-red-500 text-sm"
                          >
                            X
                          </button>
                        </div>
                      ))}
                      <div className="flex justify-between font-bold mt-2">
                        <p>Subtotal</p>
                        <p>Rs. {calculateSubtotal().toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between font-bold">
                        <p>Total</p>
                        <p>Rs. {calculateTotal().toFixed(2)}</p>
                      </div>
                    </div>
                  </CardContent>
                  <Link href="/payment">
                    <button className="bg-gradient-to-r bg-yellow-500 text-white py-2 px-8 hover:from-yellow-600">
                      Place Order
                    </button>
                  </Link>
                </Card>
              </div>
            </div>
          </form>
        ) : (
          <div>
            {/* Order Shipping Details */}
            <Card>
              <CardHeader>
                <CardTitle>Order Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Shipping Information</h3>
                  {Object.entries(formData).map(([key, value]) => (
                    <p key={key}>
                      <strong>{key}: </strong>
                      {value}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-800 mt-4 text-sm"
            >
              Download Order Information
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
