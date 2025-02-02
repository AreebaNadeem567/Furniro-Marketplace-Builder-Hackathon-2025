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



// ..........................













// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import { ShoppingCart, Heart } from "lucide-react";
// import Link from "next/link";
// import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
// import { Button } from "@/app/components/ui/button";
// import Relatedproducts from "@/app/components/Relatedproducts";
// import ProductDetailsComponent from "@/app/components/Productdetails";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// interface CartItem extends ProductDetails {
//   quantity: number;
//   totalPrice: number;
// }

// interface ProductDetails {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   productImage: string;
//   images: string[];
//   discountPercentage: number;
//   isNew: boolean;
//   tags: string[];
//   rating: number;
// }

// export default function ProductDetails() {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState<ProductDetails | null>(null);
//   const [isFavorite, setIsFavorite] = useState(() => {
//     // Check localStorage to persist the favorite state
//     const savedFavorite = localStorage.getItem("favorite");
//     return savedFavorite === "true";
//   });
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const productData = {
//       _id: searchParams.get("id") || "",
//       title: searchParams.get("productName") || "",
//       description: searchParams.get("productDescription") || "",
//       price: Number(searchParams.get("productPrice")) || 0,
//       productImage: searchParams.get("productImage") || "/placeholder.svg",
//       discountPercentage: Number(searchParams.get("productDiscountPercentage")) || 0,
//       isNew: searchParams.get("isNew") === "true",
//       tags: searchParams.get("tags")?.split(",") || [],
//       rating: Number(searchParams.get("rating")) || 0,
//       images: Array(4).fill(searchParams.get("productImage") || "/placeholder.svg"),
//     };
//     setProduct(productData);
//   }, [searchParams]);

//   useEffect(() => {
//     // Update localStorage whenever favorite state changes
//     localStorage.setItem("favorite", String(isFavorite));
//   }, [isFavorite]);

//   const handleAddToCart = () => {
//     if (product) {
//       const totalPrice = product.price * quantity * (1 - product.discountPercentage / 100);
//       const cartItem: CartItem = { ...product, quantity, totalPrice };
//       const existingCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
//       const updatedCart = [...existingCart, cartItem];
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       toast.success("Added to Cart Successfully!", { autoClose: 3000 });
//     }
//   };

//   const handleFavorite = () => {
//     setIsFavorite((prev) => !prev);
//   };

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto px-4 py-8 bg-white">
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-4 rounded-lg shadow-lg">
//           <div className="flex gap-4">
//             <div className="flex flex-col gap-4">
//               {product.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`relative w-16 h-16 overflow-hidden rounded-lg border-2 ${selectedImage === index ? "border-primary" : "border-transparent"}`}
//                 >
//                   <Image src={image} alt="Thumbnail" fill className="object-cover" />
//                 </button>
//               ))}
//             </div>
//             <div className="relative w-full aspect-square overflow-hidden rounded-lg">
//               <Image src={product.images[selectedImage]} alt={product.title} fill className="object-cover" priority />
//             </div>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <h1 className="text-3xl font-bold text-blue-600">{product.title}</h1>
//           <div className="text-2xl font-bold text-purple-600">Rs. {product.price}</div>
//           <div className="text-gray-700 text-sm space-y-2">
//             {product.description.split(/\.|\n/).slice(0, 5).map((sentence, index) => (
//               sentence.trim() && <p key={index}>{sentence.trim()}.</p>
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="flex items-center border border-gray-300 rounded-lg">
//               <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-3 py-1 text-lg text-blue-600">-</button>
//               <span className="px-4 py-1 text-lg">{quantity}</span>
//               <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-lg text-blue-600">+</button>
//             </div>
//             <Button className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg" onClick={handleAddToCart}>
//               <ShoppingCart className="w-5 h-5" /> Add to Cart
//             </Button>
//             <button onClick={handleFavorite} className={`p-2 ${isFavorite ? "text-red-500" : "text-gray-400"}`}>
//               <Heart className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="pt-6 border-t">
//             <div className="text-sm">Share:</div>
//             <div className="flex gap-6 mt-2">
//               <Link href="https://www.facebook.com" className="p-2 text-blue-600"><FaFacebookSquare className="w-8 h-8" /></Link>
//               <Link href="https://www.instagram.com" className="p-2 text-pink-700"><FaInstagramSquare className="w-8 h-8" /></Link>
//               <Link href="https://www.linkedin.com" className="p-2 text-blue-700"><FaLinkedin className="w-8 h-8" /></Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ProductDetailsComponent
//         id={Number(product._id)}
//         tags={product.tags.join(", ")}
//         isNew={product.isNew}
//         productName={product.title}
//         productPrice={product.price}
//         productDescription={product.description}
//         productImage={product.productImage}
//         discountPercentage={product.discountPercentage}
//       />
//       <Relatedproducts />
//       <ToastContainer />
//     </div>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Button } from "@/app/components/ui/button";
import Relatedproducts from "@/app/components/Relatedproducts";
import ProductDetailsComponent from "@/app/components/Productdetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartItem extends ProductDetails {
  quantity: number;
  totalPrice: number;
}

interface ProductDetails {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: string;
  images: string[];
  discountPercentage: number;
  isNew: boolean;
  tags: string[];
  rating: number;
}

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isFavorite, setIsFavorite] = useState(() => {
    const savedFavorite = localStorage.getItem("favorite");
    return savedFavorite === "true";
  });
  const searchParams = useSearchParams();

  useEffect(() => {
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
    };
    setProduct(productData);
  }, [searchParams]);

  useEffect(() => {
    localStorage.setItem("favorite", String(isFavorite));
  }, [isFavorite]);

  const handleAddToCart = () => {
    if (product) {
      const totalPrice = product.price * quantity * (1 - product.discountPercentage / 100);
      const cartItem: CartItem = { ...product, quantity, totalPrice };
      const existingCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = [...existingCart, cartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Added to Cart Successfully!", { autoClose: 3000 });
    }
  };

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
    if (!isFavorite) {
      toast.success("Added to Wishlist Successfully!", { autoClose: 3000 });
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-4 rounded-lg shadow-lg">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-16 h-16 overflow-hidden rounded-lg border-2 ${selectedImage === index ? "border-primary" : "border-transparent"}`}
                >
                  <Image src={image} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image src={product.images[selectedImage]} alt={product.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-blue-600">{product.title}</h1>
          <div className="text-2xl font-bold text-purple-600">Rs. {product.price}</div>
          <div className="text-gray-700 text-sm space-y-2">
            {product.description.split(/\.|\n/).slice(0, 5).map((sentence, index) => (
              sentence.trim() && <p key={index}>{sentence.trim()}.</p>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-3 py-1 text-lg text-blue-600">-</button>
              <span className="px-4 py-1 text-lg">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-lg text-blue-600">+</button>
            </div>
            <Button className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg" onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </Button>
              <button onClick={handleFavorite} className={`p-2 ${isFavorite ? "text-red-500" : "text-gray-400"}`}>
                <Heart className="w-6 h-6" />
              </button>
          </div>

          <div className="pt-6 border-t">
            <div className="text-sm">Share:</div>
            <div className="flex gap-6 mt-2">
              <Link href="https://www.facebook.com" className="p-2 text-blue-600"><FaFacebookSquare className="w-8 h-8" /></Link>
              <Link href="https://www.instagram.com" className="p-2 text-pink-700"><FaInstagramSquare className="w-8 h-8" /></Link>
              <Link href="https://www.linkedin.com" className="p-2 text-blue-700"><FaLinkedin className="w-8 h-8" /></Link>
            </div>
          </div>
        </div>
      </div>
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
      <Relatedproducts />
      <ToastContainer />
    </div>
  );
}
