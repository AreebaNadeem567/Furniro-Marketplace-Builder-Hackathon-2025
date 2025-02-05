// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import jsPDF from "jspdf";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "../components/ui/card";

// interface CartItem {
//   _id: string;
//   title: string;
//   price: number;
//   quantity: number;
//   totalPrice: number;
// }

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
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartItems(storedCart);
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//   };

//   const handleDownload = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text("Order Information", 10, 10);

//     doc.setFontSize(12);
//     doc.text("Billing Information:", 10, 20);
//     Object.entries(formData).forEach(([key, value], index) => {
//       doc.text(`${key}: ${value}`, 10, 30 + index * 7);
//     });

//     const subtotal = calculateSubtotal();
//     doc.text(`Subtotal: Rs. ${subtotal.toFixed(2)}`, 10, 120);
//     doc.text(`Total: Rs. ${calculateTotal().toFixed(2)}`, 10, 130);

//     doc.save("order-info.pdf");
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
//   };

//   const calculateTotal = () => {
//     const subtotal = calculateSubtotal();
//     return subtotal;
//   };

//   const removeItem = (itemId: string) => {
//     setCartItems(cartItems.filter((item) => item._id !== itemId));
//   };

//   return (
//     <div>
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
//             <span className="w-4 h-4">→</span>
//             <span>Checkout</span>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 py-8 font-poppins">
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
//                   // className="w-full bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-800 text-sm">
//                  className="bg-gradient-to-r bg-yellow-500 text-white py-2 px-8 hover:from-yellow-600">
//                   Submit
//                 </button>
//               </div>

//               {/* Order Summary Card */}
//               <div>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
//                       Order Summary
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4 mt-4">
//                       {cartItems.map((item) => (
//                         <div
//                           key={item._id}
//                           className="flex justify-between items-center"
//                         >
//                           <p>
//                             {item.title} x {item.quantity}
//                           </p>
//                           <p>Rs. {item.totalPrice.toFixed(2)}</p>
//                           <button
//                             onClick={() => removeItem(item._id)}
//                             className="text-red-500 text-sm"
//                           >
//                             X
//                           </button>
//                         </div>
//                       ))}
//                       <div className="flex justify-between font-bold mt-2">
//                         <p>Subtotal</p>
//                         <p>Rs. {calculateSubtotal().toFixed(2)}</p>
//                       </div>
//                       <div className="flex justify-between font-bold">
//                         <p>Total</p>
//                         <p>Rs. {calculateTotal().toFixed(2)}</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                   <Link href="/payment">
//                     <button className="bg-gradient-to-r bg-yellow-500 text-white py-2 px-8 hover:from-yellow-600">
//                       Place Order
//                     </button>
//                   </Link>
//                 </Card>
//               </div>
//             </div>
//           </form>
//         ) : (
//           <div>
//             {/* Order Shipping Details */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Order Shipping</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <h3 className="text-lg font-medium">Shipping Information</h3>
//                   {Object.entries(formData).map(([key, value]) => (
//                     <p key={key}>
//                       <strong>{key}: </strong>
//                       {value}
//                     </p>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Download Button */}
//             <button
//               onClick={handleDownload}
//               className="w-full bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-800 mt-4 text-sm"
//             >
//               Download Order Information
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
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
                  className="bg-gradient-to-r bg-yellow-500 text-white py-2 px-8 hover:from-yellow-600"
                >
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
                          <p className="text-gray-600">
                            Rs.{" "}
                            {item.totalPrice ? item.totalPrice.toFixed(2) : "0.00"}
                          </p>
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
