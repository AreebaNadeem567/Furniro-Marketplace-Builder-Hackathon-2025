"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="p-4 bg-white shadow-md rounded-lg">
              <Image src={item.productImage} alt={item.title} width={150} height={150} className="rounded-lg mx-auto" />
              <h2 className="text-lg font-semibold mt-3 text-center">{item.title}</h2>
              <p className="text-center text-gray-600">Rs. {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}










// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Heart } from "lucide-react"

// export default function Wishlist() {
//   const [wishlist, setWishlist] = useState<any[]>([])

//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
//     const wishlistWithIds = storedWishlist.map((item: { _id: any }) => ({
//       ...item,
//       _id: item._id || Math.random().toString(36).substr(2, 9),
//     }))
//     setWishlist(wishlistWithIds)
//     localStorage.setItem("wishlist", JSON.stringify(wishlistWithIds))
//   }, [])

//   const removeItem = (id: string) => {
//     console.log("Removing item with id:", id)
//     console.log("Current wishlist:", wishlist)
//     const updatedWishlist = wishlist.filter((item) => {
//       console.log("Checking item:", item._id, "against id:", id)
//       return item._id !== id
//     })
//     console.log("Updated wishlist:", updatedWishlist)
//     setWishlist(updatedWishlist)
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

//       {wishlist.length === 0 ? (
//         <p className="text-center text-gray-500">Your wishlist is empty.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {wishlist.map((item) => {
//             console.log("Rendering item:", item)
//             return (
//               <div key={item._id} className="p-4 bg-white shadow-md rounded-lg">
//                 <Image
//                   src={item.productImage || "/placeholder.svg"}
//                   alt={item.title}
//                   width={150}
//                   height={150}
//                   className="rounded-lg mx-auto"
//                 />
//                 <h2 className="text-lg font-semibold mt-3 text-center">{item.title}</h2>
//                 <p className="text-center text-gray-600">Rs. {item.price}</p>
//                 <div className="flex justify-center mt-3">
//                   <Heart
//                     className="text-red-500 cursor-pointer"
//                     size={24}
//                     onClick={() => removeItem(item._id)}
//                     fill="currentColor"
//                   />
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       )}
//     </div>
//   )
// }








// // "use client";

// // import { useState, useEffect } from "react";
// // import Image from "next/image";
// // import { Heart } from "lucide-react"; // Importing the heart icon

// // export default function Wishlist() {
// //   const [wishlist, setWishlist] = useState<any[]>([]);

// //   useEffect(() => {
// //     const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
// //     setWishlist(storedWishlist);
// //   }, []);

// //   const removeItem = (id: string) => {
// //     const updatedWishlist = wishlist.filter(item => item._id !== id);
// //     console.log("Updated Wishlist:", updatedWishlist); // Debug: Check the updated wishlist in console
// //     setWishlist(updatedWishlist);
// //     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

// //       {wishlist.length === 0 ? (
// //         <p className="text-center text-gray-500">Your wishlist is empty.</p>
// //       ) : (
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {wishlist.map((item) => (
// //             <div key={item._id} className="p-4 bg-white shadow-md rounded-lg">
// //               <Image src={item.productImage} alt={item.title} width={150} height={150} className="rounded-lg mx-auto" />
// //               <h2 className="text-lg font-semibold mt-3 text-center">{item.title}</h2>
// //               <p className="text-center text-gray-600">Rs. {item.price}</p>
// //               <div className="flex justify-center mt-3">
// //                 <Heart 
// //                   className="text-red-500 cursor-pointer" 
// //                   size={24} 
// //                   onClick={() => removeItem(item._id)} // Trigger remove item on heart click
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

















// // "use client";

// // import { useEffect, useState } from "react";
// // import Image from "next/image";
// // import { IoHeart } from "react-icons/io5"; // Heart icon for removing from wishlist

// // interface WishlistItem {
// //   id: string; // Assuming `id` is a string in your `localStorage`
// //   name: string;
// //   image: string;
// //   price: number;
// // }

// // export default function WishlistPage() {
// //   const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

// //   // Fetch wishlist from localStorage when the component is mounted
// //   useEffect(() => {
// //     const storedWishlist = localStorage.getItem("wishlist");
// //     if (storedWishlist) {
// //       try {
// //         const parsedWishlist = JSON.parse(storedWishlist);
// //         // Ensure the parsed data is in the correct format
// //         if (Array.isArray(parsedWishlist)) {
// //           setWishlist(parsedWishlist);
// //         }
// //       } catch (error) {
// //         console.error("Error parsing wishlist from localStorage:", error);
// //       }
// //     }
// //   }, []);

// //   const removeFromWishlist = (id: string) => {
// //     const updatedWishlist = wishlist.filter((item) => item.id !== id);
// //     setWishlist(updatedWishlist);
// //     // Update localStorage with the new wishlist
// //     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
// //   };

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6">Saved Items</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {wishlist.length > 0 ? (
// //           wishlist.map((item) => (
// //             <div
// //               key={item.id}
// //               className="border p-4 rounded-lg shadow-lg flex flex-col items-center"
// //             >
// //               {item.image ? (
// //                 <Image
// //                   src={item.image}
// //                   alt={item.name}
// //                   width={150}
// //                   height={150}
// //                   className="rounded-lg"
// //                 />
// //               ) : (
// //                 <div className="w-32 h-32 bg-gray-300 rounded-lg flex justify-center items-center text-white">No Image</div>
// //               )}
// //               <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
// //               <p className="text-gray-600">${item.price.toFixed(2)}</p>
// //               <button
// //                 onClick={() => removeFromWishlist(item.id)}
// //                 className="text-red-600 hover:text-red-800 mt-2"
// //               >
// //                 <IoHeart size={24} />
// //               </button>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-gray-500">Your wishlist is empty.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
