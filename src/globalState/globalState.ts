import { atom } from "jotai"


export const searchName = atom("")













// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { useSearchParams } from "next/navigation"
// import { Heart, ShoppingCart } from "lucide-react" // Removed unnecessary icons
// import { Button } from "@/app/components/ui/button"
// import Link from "next/link" // Added Link for navigation
// import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa" // Social media icons
// import Relatedproducts from "@/app/components/Relatedproducts"
// import ProductDetailsComponent from "@/app/components/Productdetails"

// interface ProductDetails {
//   _id: string
//   title: string
//   description: string
//   price: number
//   productImage: string
//   images: string[]
//   discountPercentage: number
//   isNew: boolean
//   tags: string[]
//   rating: number // Added rating
// }

// export default function ProductDetails() {
//   const [selectedImage, setSelectedImage] = useState(0)
//   const [quantity, setQuantity] = useState(1)
//   const [product, setProduct] = useState<ProductDetails | null>(null)
//   const searchParams = useSearchParams()

//   useEffect(() => {
//     // Get product details from URL parameters
//     const productData = {
//       _id: searchParams.get("id") || "",
//       title: searchParams.get("productName") || "",
//       description: searchParams.get("productDescription") || "",
//       price: Number(searchParams.get("productPrice")) || 0,
//       productImage: searchParams.get("productImage") || "/placeholder.svg",
//       discountPercentage: Number(searchParams.get("productDiscountPercentage")) || 0,
//       isNew: searchParams.get("isNew") === "true",
//       tags: searchParams.get("tags")?.split(",") || [],
//       rating: Number(searchParams.get("rating")) || 0, // Added rating from URL
//       // Create an array of images including the main product image and additional images
//       images: Array(4).fill(searchParams.get("productImage") || "/placeholder.svg"),
//     }
//     setProduct(productData)
//   }, [searchParams])

//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 bg-white"> {/* Changed background to white */}
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Image Gallery */}
//         <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-4 rounded-lg shadow-lg">
//           <div className="flex gap-4">
//             {/* Thumbnail Images */}
//             <div className="flex flex-col gap-4">
//               {product.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`relative w-16 h-16 overflow-hidden rounded-lg border-2 ${
//                     selectedImage === index ? "border-primary" : "border-transparent"
//                   }`}
//                 >
//                   <Image
//                     src={image || "/placeholder.svg"}
//                     alt={`${product.title} thumbnail ${index + 1}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//             {/* Main Image */}
//             <div className="relative w-full aspect-square overflow-hidden rounded-lg">
//               <Image
//                 src={product.images[selectedImage] || "/placeholder.svg"}
//                 alt={product.title}
//                 fill
//                 className="object-cover max-w-[400px] max-h-[400px]" // Smaller size for main image
//                 priority
//               />
//             </div>
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6">
//           {/* Title and New badge */}
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold text-blue-600">{product.title}</h1>
//             {product.isNew && (
//               <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full animate-pulse">New</div>
//             )}
//           </div>

//           {/* Price and Rating */}
//           <div className="flex items-center gap-2">
//             <div className="text-2xl font-bold text-purple-600">Rs. {product.price}</div>
//             {product.discountPercentage > 0 && (
//               <div className="text-sm text-red-500 font-semibold">-{product.discountPercentage}% OFF</div>
//             )}
//             <div className="flex items-center gap-2 ml-4">
//               <div className="flex text-yellow-400">
//                 {"★★★★★".split("").map((star, i) => (
//                   <span key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}>{star}</span>
//                 ))}
//               </div>
//               <span className="text-sm text-muted-foreground">({product.rating})</span>
//             </div>
//           </div>

//           {/* Description (Split into 5 lines) */}
//           <div className="text-sm text-muted-foreground">
//             {product.description.split("\n").slice(0, 5).map((line, index) => (
//               <p key={index}>{line}</p>
//             ))}
//           </div>

//           {/* Tags */}
//           <div className="text-sm text-muted-foreground">Tags: {product.tags.join(", ")}</div>

//           {/* Actions */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center border rounded-md">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="px-4 py-2 border-r hover:bg-muted"
//               >
//                 -
//               </button>
//               <span className="px-4 py-2">{quantity}</span>
//               <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 border-l hover:bg-muted">
//                 +
//               </button>
//             </div>
//             <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
//               <ShoppingCart className="mr-2" /> Add To Cart
//             </Button>
//             <Button variant="outline" size="icon">
//               <Heart className="h-4 w-4" />
//             </Button>
//           </div>

//           {/* Social Media Share Section */}
//           <div className="pt-6 border-t">
//             <div className="text-sm">Share:</div>
//             <div className="flex gap-6 mt-2">
//               <Link
//                 href="https://www.facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
//               >
//                 <FaFacebookSquare className="w-8 h-8" />
//               </Link>
//               <Link
//                 href="https://www.instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 text-pink-700 hover:text-pink-800 transition-colors"
//               >
//                 <FaInstagramSquare className="w-8 h-8" />
//               </Link>
//               <Link
//                 href="https://www.linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 text-blue-700 hover:text-blue-800 transition-colors"
//               >
//                 <FaLinkedin className="w-8 h-8" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//   <ProductDetailsComponent
//     id={Number(product._id)}  // Convert `product._id` to a number
//     tags={product.tags.join(", ")}  // Join tags array as a string for display
//     isNew={product.isNew}  // Pass isNew as a prop to ProductDetailsComponent
//     productName={product.title}  // Pass product title as the product name
//     productPrice={product.price}  // Pass product price
//     productDescription={product.description}  // Pass product description
//     productImage={product.productImage}  // Pass product image URL
//     discountPercentage={product.discountPercentage}  // Pass discount percentage
//   />
// </div>


// <div>
//    {/* Related Products Section */}
//    <Relatedproducts />
// </div>
     
//     </div>
//   )
// }


