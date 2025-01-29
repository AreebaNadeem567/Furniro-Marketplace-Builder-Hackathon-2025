// import React from "react";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Spmain from "@/app/components/Spmain";
// import Productdetails from "@/app/components/Productdetails";
// import Relatedproducts from "@/app/components/Relatedproducts";
// import { client } from "@/sanity/lib/client";


// // Define the Product interface
// interface Product {
//   title: string;
//   description: string;
//   isNew: boolean;
//   tags: string[];
//   price: number;
//   productImage: string;
//   dicountPercentage: number;
//   _id: string;
// }

// // Fetch products from Sanity
// async function getProducts(): Promise<Product[]> {
//   try {
//     const products = await client.fetch(`
//       *[_type == 'product'] {
//         'productImage': productImage.asset->url,  // Fetching image URL
//         description,
//         dicountPercentage,
//         tags,
//         isNew,  // Fetching the 'isNew' field
//         title,
//         price,
//         _id  // Ensures _id is included
//       }
//     `);

//     return products.map((product: any) => ({
//       ...product,
//       _id: product._id, // Ensure the _id is included
//     }));
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return []; // Return an empty array in case of error
//   }
// }

// async function Singleproduct(props: {
//   searchParams: Promise<{
//     id: number;
//     productName: string;
//     productPrice: number;
//     productImage: string;
//     productDescription: string;
//     productdicountPercentage: number;
//     tags: string;
//     isNew: boolean;  // The 'isNew' property will be passed here
//   }>;
// }) {
//   const searchParams = await props.searchParams;
//   const {
//     id,
//     productName,
//     productPrice,
//     productImage,
//     productDescription,
//     productdicountPercentage,
//     tags,
//     isNew,  // 'isNew' is included here
//   } = searchParams;

//   return (
//     <>
//       {/* Breadcrumb Navigation Section */}
//       <div className="w-full flex items-center min-h-[80px] exsm:min-h-[90px] xsm:min-h-[100px] sm:min-h-[120px] bg-[#f9f1e7] px-2 exsm:px-4 xsm:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 box-border">
//         {/* Breadcrumb Links */}
//         <div className="w-full flex items-center flex-wrap text-sm exsm:text-base xsm:text-lg sm:text-xl md:text-2xl leading-[22px] exsm:leading-[24px] xsm:leading-[26px] sm:leading-[28px] md:leading-[30px]">
//           {/* Home Link */}
//           <Link href="/">
//             <p className="text-[#7c7474] flex items-center">
//               Home
//               <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 exsm:w-5 exsm:h-5 xsm:w-6 xsm:h-6 sm:w-7 sm:h-7" />
//             </p>
//           </Link>

//           {/* Shop Link */}
//           <Link href="/shop">
//             <p className="text-[#7c7474] ml-2 exsm:ml-3 xsm:ml-4 sm:ml-5 md:ml-6 flex items-center">
//               Shop
//               <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 exsm:w-5 exsm:h-5 xsm:w-6 xsm:h-6 sm:w-7 sm:h-7" />
//             </p>
//           </Link>

//           {/* Product Name with Left Border */}
//           <div className="ml-2 exsm:ml-3 xsm:ml-4 sm:ml-5 md:ml-6 pl-2 exsm:pl-3 xsm:pl-4 sm:pl-5 md:pl-6 border-l-2 border-black">
//             <p className="font-medium text-sm exsm:text-base xsm:text-lg sm:text-xl md:text-2xl">
//               {productName}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Product Section */}
//       <Spmain
//         id={id}
//         productName={productName}
//         productPrice={productPrice}
//         productImage={productImage}
//         productDescription={productDescription}
//         dicountPercentage={productdicountPercentage}
//         tags={tags}
//         isNew={isNew}  // Pass isNew as a prop to Spmain
//       />

//       {/* Product Details Section */}
//       <Productdetails
//         id={id}
//         tags={tags}
//         isNew={isNew}  // Pass isNew as a prop to Productdetails
//         productName={productName}
//         productPrice={productPrice}
//         productDescription={productDescription}
//         productImage={productImage}
//         discountPercentage={productdicountPercentage}
//       />

//       {/* Related Products Section */}
//       <Relatedproducts />
//     </>
//   );
// }

// export default Singleproduct;




// .........................


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














"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import Relatedproducts from "@/app/components/Relatedproducts"
import ProductDetailsComponent from "@/app/components/Productdetails"

interface ProductDetails {
  _id: string
  title: string
  description: string
  price: number
  productImage: string
  images: string[]
  discountPercentage: number
  isNew: boolean
  tags: string[]
  rating: number
}

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState<ProductDetails | null>(null)
  const [isFavorite, setIsFavorite] = useState(false) // State to track if the item is a favorite
  const [whistleMessage, setWhistleMessage] = useState('') // State for the "whistle" message
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get product details from URL parameters
    const productData = {
      _id: searchParams.get("id") || "",
      title: searchParams.get("productName") || "",
      description: searchParams.get("productDescription") || "",
      price: Number(searchParams.get("productPrice")) || 0,
      productImage: searchParams.get("productImage") || "/placeholder.svg",
      discountPercentage: Number(searchParams.get("productDiscountPercentage")) || 0,
      isNew: searchParams.get("isNew") === "true",
      tags: searchParams.get("tags")?.split(",") || [],
      rating: Number(searchParams.get("rating")) || 0,
      images: Array(4).fill(searchParams.get("productImage") || "/placeholder.svg"),
    }
    setProduct(productData)
  }, [searchParams])

  if (!product) {
    return <div>Loading...</div>
  }

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite)
    if (!isFavorite) {
      setWhistleMessage('Item added to favorites!')
    } else {
      setWhistleMessage('')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-4 rounded-lg shadow-lg">
          <div className="flex gap-4">
            {/* Thumbnail Images */}
            <div className="flex flex-col gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-16 h-16 overflow-hidden rounded-lg border-2 ${selectedImage === index ? "border-primary" : "border-transparent"}`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover max-w-[400px] max-h-[400px]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title and New badge */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-600">{product.title}</h1>
            {product.isNew && (
              <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full animate-pulse">New</div>
            )}
          </div>

          {/* Price and Rating */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-purple-600">Rs. {product.price}</div>
            {product.discountPercentage > 0 && (
              <div className="text-sm text-red-500 font-semibold">-{product.discountPercentage}% OFF</div>
            )}
            <div className="flex items-center gap-2 ml-4">
              <div className="flex text-yellow-400">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}>{star}</span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.rating})</span>
            </div>
          </div>

          {/* Description */}
          <div className="text-sm text-muted-foreground">
            {product.description.split("\n").slice(0, 5).map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="text-sm text-muted-foreground">Tags: {product.tags.join(", ")}</div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border-r hover:bg-muted"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 border-l hover:bg-muted">
                +
              </button>
            </div>
            <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
              <ShoppingCart className="mr-2" /> Add To Cart
            </Button>
            <Button variant="outline" size="icon" onClick={handleHeartClick}>
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Whistle Message */}
          {whistleMessage && (
            <div className="text-green-500 mt-2">{whistleMessage}</div>
          )}

          {/* Social Media Share Section */}
          <div className="pt-6 border-t">
            <div className="text-sm">Share:</div>
            <div className="flex gap-6 mt-2">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaFacebookSquare className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-pink-700 hover:text-pink-800 transition-colors"
              >
                <FaInstagramSquare className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-blue-700 hover:text-blue-800 transition-colors"
              >
                <FaLinkedin className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductDetailsComponent
          id={Number(product._id)}
          tags={product.tags.join(", ")}
          isNew={product.isNew}
          productName={product.title}
          productPrice={product.price}
          productDescription={product.description}
          productImage={product.productImage}
          discountPercentage={product.discountPercentage}
        />
      </div>

      <div>
        {/* Related Products Section */}
        <Relatedproducts />
      </div>
    </div>
  )
}




