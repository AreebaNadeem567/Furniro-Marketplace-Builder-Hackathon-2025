"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, ChevronRight } from "lucide-react"
import Link from "next/link"

interface WishlistItem {
  _id: string
  title: string
  price: number
  productImage: string
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setWishlist(storedWishlist)
  }, [])

  const removeFromWishlist = (index: number) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((_, i) => i !== index) // Use index to remove item
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
      return updatedWishlist
    })
  }

  return (

<>
{/* Banner Section */}
<section className="bg-[url('/images/comparison-bg.png')] bg-cover bg-center py-12 md:py-16 mb-6">
<div className="container mx-auto px-4 text-center">
  <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
  <h1 className="text-3xl md:text-4xl font-medium mb-4">Wishlist Page</h1>
  <div className="flex items-center justify-center gap-2 text-sm">
    <Link href="/" className="hover:underline">Home</Link>
    <ChevronRight className="w-4 h-4" />
    <span>Cart</span>
  </div>
</div>
</section>

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <div
              key={item._id}
              className="p-4 bg-white shadow-md rounded-lg text-center transition-transform transform hover:scale-105"
            >
              <Image
                src={item.productImage || "/placeholder.svg"}
                alt={item.title}
                width={150}
                height={150}
                className="rounded-lg mx-auto"
              />
              <h2 className="text-lg font-semibold mt-3">{item.title}</h2>
              <p className="text-gray-600 mb-2">Rs. {item.price}</p>
              <button
                onClick={() => removeFromWishlist(index)} // Use index here
                // className="mt-2 px-4  text-white rounded-lg flex items-center gap-2 hover:bg-red-600"
                className="p-2 text-gray-400"
              >
                <Heart className="w-6 h-6 mx-auto text-red-600" /> {/* Red heart icon */}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>

  )
}












// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Heart, ChevronRight } from "lucide-react"
// import Link from "next/link"

// interface WishlistItem {
//   _id: string
//   title: string
//   price: number
//   productImage: string
// }

// export default function Wishlist() {
//   const [wishlist, setWishlist] = useState<WishlistItem[]>([])

//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
//     setWishlist(storedWishlist)
//   }, [])

//   const removeFromWishlist = (index: number) => {
//     setWishlist((prevWishlist) => {
//       const updatedWishlist = prevWishlist.filter((_, i) => i !== index)
//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//       return updatedWishlist
//     })
//   }

//   return (
//     <>
//       {/* Banner Section */}
//       <section className="bg-[url('/images/comparison-bg.png')] bg-cover bg-center py-12 md:py-16 mb-6">
//         <div className="container mx-auto px-4 text-center">
//           <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
//           <h1 className="text-3xl md:text-4xl font-medium mb-4">Wishlist Page</h1>
//           <div className="flex items-center justify-center gap-2 text-sm">
//             <Link href="/" className="hover:underline">Home</Link>
//             <ChevronRight className="w-4 h-4" />
//             <span>Wishlist</span> {/* Changed Cart to Wishlist */}
//           </div>
//         </div>
//       </section>

//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

//         {wishlist.length === 0 ? (
//           <p className="text-center text-gray-500">Your wishlist is empty.</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {wishlist.map((item, index) => (
//               <div
//                 key={item._id}
//                 className="p-4 bg-white shadow-md rounded-lg text-center transition-transform transform hover:scale-105"
//               >
//                 <Image
//                   src={item.productImage || "/placeholder.svg"}
//                   alt={item.title}
//                   width={150}
//                   height={150}
//                   className="rounded-lg mx-auto"
//                 />
//                 <h2 className="text-lg font-semibold mt-3">{item.title}</h2>
//                 <p className="text-gray-600 mb-2">Rs. {item.price}</p>
//                 <button 
//                   onClick={() => removeFromWishlist(index)}
//                   className="p-2 text-gray-400 hover:text-red-600"
//                 >
//                   <Heart className="w-6 h-6 mx-auto" /> {/* Red heart icon */}
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   )
// }
















// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Heart } from "lucide-react"

// interface WishlistItem {
//   _id: string
//   title: string
//   price: number
//   productImage: string
// }

// export default function Wishlist() {
//   const [wishlist, setWishlist] = useState<WishlistItem[]>([])

//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
//     setWishlist(storedWishlist)
//   }, [])

//   const removeFromWishlist = (index: number) => {
//     setWishlist((prevWishlist) => {
//       const updatedWishlist = prevWishlist.filter((_, i) => i !== index) // Use index to remove item
//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//       return updatedWishlist
//     })
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

//       {wishlist.length === 0 ? (
//         <p className="text-center text-gray-500">Your wishlist is empty.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {wishlist.map((item, index) => (
//             <div
//               key={item._id}
//               className="p-4 bg-white shadow-md rounded-lg text-center transition-transform transform hover:scale-105"
//             >
//               <Image
//                 src={item.productImage || "/placeholder.svg"}
//                 alt={item.title}
//                 width={150}
//                 height={150}
//                 className="rounded-lg mx-auto"
//               />
//               <h2 className="text-lg font-semibold mt-3">{item.title}</h2>
//               <p className="text-gray-600 mb-2">Rs. {item.price}</p>
//               <button 
//                 onClick={() => removeFromWishlist(index)} // Use index here
//                 className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2 hover:bg-red-600"
//               >
//                 <Heart className="w-6 h-6 mx-auto text-red-600" /> {/* Apply red color to heart icon */}
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
