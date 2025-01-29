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
// import { Heart, Share2 } from "lucide-react"
// import { Button } from "@/app/components/ui/button"
// // import { Button } from "@/components/ui/button"

// interface ProductDetails {
//   _id: string
//   title: string
//   description: string
//   price: number
//   productImage: string
//   images: string[]
//   dicountPercentage: number
//   isNew: boolean
//   tags: string[]
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
//       dicountPercentage: Number(searchParams.get("productdicountPercentage")) || 0,
//       isNew: searchParams.get("isNew") === "true",
//       tags: searchParams.get("tags")?.split(",") || [],
//       // Create an array of images including the main product image
//       images: [
//         searchParams.get("productImage") || "/placeholder.svg",
//         "/placeholder.svg?height=600&width=600",
//         "/placeholder.svg?height=600&width=600",
//         "/placeholder.svg?height=600&width=600",
//       ],
//     }
//     setProduct(productData)
//   }, [searchParams])

//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Image Gallery */}
//         <div className="space-y-4">
//           <div className="relative aspect-square overflow-hidden rounded-lg">
//             <Image
//               src={product.images[selectedImage] || "/placeholder.svg"}
//               alt={product.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {product.images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
//                   selectedImage === index ? "border-primary" : "border-transparent"
//                 }`}
//               >
//                 <Image
//                   src={image || "/placeholder.svg"}
//                   alt={`${product.title} thumbnail ${index + 1}`}
//                   fill
//                   className="object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6">
//           <h1 className="text-3xl font-bold">{product.title}</h1>

//           <div className="flex items-center gap-4">
//             <div className="text-2xl font-bold">Rs. {product.price}</div>
//             {product.dicountPercentage > 0 && (
//               <div className="text-sm text-red-500">-{product.dicountPercentage}% OFF</div>
//             )}
//           </div>

//           {product.isNew && (
//             <div className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">New</div>
//           )}

//           <div className="flex items-center gap-2">
//             <div className="flex text-yellow-400">
//               {"★★★★★".split("").map((star, i) => (
//                 <span key={i}>{star}</span>
//               ))}
//             </div>
//             <span className="text-sm text-muted-foreground">5 Customer Reviews</span>
//           </div>

//           <p className="text-muted-foreground">{product.description}</p>

//           {product.tags.length > 0 && (
//             <div className="flex gap-2 flex-wrap">
//               {product.tags.map((tag, index) => (
//                 <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}

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
//             <Button className="flex-1">Add To Cart</Button>
//             <Button variant="outline" size="icon">
//               <Heart className="h-4 w-4" />
//             </Button>
//           </div>

//           <Button variant="outline" className="w-full">
//             Comparison
//           </Button>

//           <div className="pt-6 border-t">
//             <div className="text-sm">Share:</div>
//             <div className="flex gap-4 mt-2">
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-pink-600 hover:text-pink-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }





// // .....................















// ......................







// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import { Heart } from "lucide-react";
// import { Button } from "@/app/components/ui/button";

// interface ProductDetails {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   images: string[];
//   discountPercentage: number;
//   isNew: boolean;
//   tags: string[];
// }

// export default function ProductDetails() {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState<ProductDetails | null>(null);
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     // Get product details from URL parameters
//     const productData = {
//       _id: searchParams.get("id") || "",
//       title: searchParams.get("productName") || "",
//       description: searchParams.get("productDescription") || "",
//       price: Number(searchParams.get("productPrice")) || 0,
//       discountPercentage: Number(searchParams.get("productDiscountPercentage")) || 0,
//       isNew: searchParams.get("isNew") === "true",
//       tags: searchParams.get("tags")?.split(",") || [],
//       images: searchParams.getAll("productImage") || [],
//     };
//     setProduct(productData);
//   }, [searchParams]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Image Gallery */}
//         <div className="space-y-4">
//           {/* Main Display Image */}
//           <div className="relative aspect-square overflow-hidden rounded-lg">
//             <Image
//               src={product.images[selectedImage] || "/placeholder.svg"}
//               alt={product.title || "Product Image"}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Thumbnail Images */}
//           <div className="grid grid-cols-4 gap-4">
//             {product.images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
//                   selectedImage === index ? "border-primary" : "border-transparent"
//                 }`}
//               >
//                 <Image
//                   src={image || "/placeholder.svg"}
//                   alt={`${product.title} thumbnail ${index + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12vw, 8vw"
//                   className="object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6">
//           {/* Title and New Badge */}
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold">{product.title}</h1>
//             {product.isNew && <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">New</div>}
//           </div>

//           {/* Price and Discount */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="text-2xl font-bold">Rs. {product.price}</div>
//               {product.discountPercentage > 0 && (
//                 <div className="text-sm text-red-500">-{product.discountPercentage}% OFF</div>
//               )}
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-muted-foreground line-clamp-2">{product.description}</p>

//           {/* Tags */}
//           {product.tags.length > 0 && (
//             <div className="flex gap-2 flex-wrap">
//               {product.tags.map((tag, index) => (
//                 <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}

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
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="px-4 py-2 border-l hover:bg-muted"
//               >
//                 +
//               </button>
//             </div>
//             <Button className="flex-1">Add To Cart</Button>
//             <Button variant="outline" size="icon">
//               <Heart className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import { Heart } from "lucide-react";
// import { Button } from "@/app/components/ui/button";

// interface ProductDetails {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   images: string[];
//   discountPercentage: number;
//   isNew: boolean;
//   tags: string[];
// }

// export default function ProductDetails() {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState<ProductDetails | null>(null);
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const productData = {
//       _id: searchParams.get("id") || "",
//       title: searchParams.get("productName") || "",
//       description: searchParams.get("productDescription") || "",
//       price: Number(searchParams.get("productPrice")) || 0,
//       discountPercentage: Number(searchParams.get("productDiscountPercentage")) || 0,
//       isNew: searchParams.get("isNew") === "true",
//       tags: searchParams.get("tags")?.split(",") || [],
//       images: searchParams.getAll("productImage") || [],
//     };
//     setProduct(productData);
//   }, [searchParams]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="space-y-4">
//           <div className="relative aspect-square overflow-hidden rounded-lg">
//             <Image
//               src={product.images[selectedImage] || "/placeholder.svg"}
//               alt={product.title || "Product Image"}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className="object-cover"
//               priority
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {product.images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
//                   selectedImage === index ? "border-primary" : "border-transparent"
//                 }`}
//               >
//                 <Image
//                   src={image || "/placeholder.svg"}
//                   alt={`${product.title} thumbnail ${index + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12vw, 8vw"
//                   className="object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold">{product.title}</h1>
//             {product.isNew && <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">New</div>}
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="text-2xl font-bold">Rs. {product.price}</div>
//               {product.discountPercentage > 0 && (
//                 <div className="text-sm text-red-500">-{product.discountPercentage}% OFF</div>
//               )}
//             </div>
//           </div>
//           <p className="text-muted-foreground line-clamp-2">{product.description}</p>
//           {product.tags.length > 0 && (
//             <div className="flex gap-2 flex-wrap">
//               {product.tags.map((tag, index) => (
//                 <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center border rounded-md">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="px-4 py-2 border-r hover:bg-muted"
//               >
//                 -
//               </button>
//               <span className="px-4 py-2">{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="px-4 py-2 border-l hover:bg-muted"
//               >
//                 +
//               </button>
//             </div>
//             <Button className="flex-1">Add To Cart</Button>
//             <Button variant="outline" size="icon">
//               <Heart className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import { Heart } from "lucide-react";
// import { Button } from "@/app/components/ui/button";

// interface ProductDetails {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   images: string[];
//   discountPercentage: number;
//   isNew: boolean;
//   tags: string[];
// }

// export default function ProductDetails() {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState<ProductDetails | null>(null);
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const defaultImages = [
//       "/placeholder1.svg",
//       "/placeholder2.svg",
//       "/placeholder3.svg",
//     ];

//     const productImages = searchParams.getAll("productImage");
//     const productData = {
//       _id: searchParams.get("id") || "",
//       title: searchParams.get("productName") || "",
//       description: searchParams.get("productDescription") || "",
//       price: Number(searchParams.get("productPrice")) || 0,
//       discountPercentage: Number(searchParams.get("productDiscountPercentage")) || 0,
//       isNew: searchParams.get("isNew") === "true",
//       tags: searchParams.get("tags")?.split(",") || [],
//       images: productImages.length > 0 ? productImages : defaultImages,
//     };

//     setProduct(productData);
//   }, [searchParams]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="space-y-4">
//           <div className="relative aspect-square overflow-hidden rounded-lg">
//             <Image
//               src={product.images[selectedImage]}
//               alt={product.title || "Product Image"}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className="object-cover"
//               priority
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {product.images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
//                   selectedImage === index ? "border-primary" : "border-transparent"
//                 }`}
//               >
//                 <Image
//                   src={image}
//                   alt={`${product.title} thumbnail ${index + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12vw, 8vw"
//                   className="object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold">{product.title}</h1>
//             {product.isNew && <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">New</div>}
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="text-2xl font-bold">Rs. {product.price}</div>
//               {product.discountPercentage > 0 && (
//                 <div className="text-sm text-red-500">-{product.discountPercentage}% OFF</div>
//               )}
//             </div>
//           </div>
//           <p className="text-muted-foreground line-clamp-2">{product.description}</p>
//           {product.tags.length > 0 && (
//             <div className="flex gap-2 flex-wrap">
//               {product.tags.map((tag, index) => (
//                 <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center border rounded-md">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="px-4 py-2 border-r hover:bg-muted"
//               >
//                 -
//               </button>
//               <span className="px-4 py-2">{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="px-4 py-2 border-l hover:bg-muted"
//               >
//                 +
//               </button>
//             </div>
//             <Button className="flex-1">Add To Cart</Button>
//             <Button variant="outline" size="icon">
//               <Heart className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import { Heart } from "lucide-react";
// import { Button } from "@/app/components/ui/button";

// interface ProductDetails {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   images: string[];
//   discountPercentage: number;
//   isNew: boolean;
//   tags: string[];
// }

// export default function ProductDetails() {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState<ProductDetails | null>(null);
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     // Default placeholder images
//     const defaultImages = [
//       "/placeholder1.svg",
//       "/placeholder2.svg",
//       "/placeholder3.svg",
//       "/placeholder4.svg",
//       "/placeholder5.svg",
//       "/placeholder6.svg",
//     ];

//     // Fetch product data from searchParams
//     const productImages = searchParams.getAll("productImage");
//     const productData = {
//       _id: searchParams.get("id") || "",
//       title: searchParams.get("productName") || "Default Product",
//       description: searchParams.get("productDescription") || "No description available.",
//       price: Number(searchParams.get("productPrice")) || 0,
//       discountPercentage: Number(searchParams.get("productDiscountPercentage")) || 0,
//       isNew: searchParams.get("isNew") === "true",
//       tags: searchParams.get("tags")?.split(",") || [],
//       images: productImages.length > 0 ? productImages : defaultImages,
//     };

//     setProduct(productData);
//   }, [searchParams]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Image Section */}
//         <div className="space-y-4">
//           <div className="relative aspect-square overflow-hidden rounded-lg">
//             <Image
//               src={product.images[selectedImage]}
//               alt={product.title || "Product Image"}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className="object-cover"
//               priority
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {product.images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
//                   selectedImage === index ? "border-primary" : "border-transparent"
//                 }`}
//               >
//                 <Image
//                   src={image}
//                   alt={`${product.title} thumbnail ${index + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12vw, 8vw"
//                   className="object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold">{product.title}</h1>
//             {product.isNew && <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">New</div>}
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="text-2xl font-bold">Rs. {product.price}</div>
//               {product.discountPercentage > 0 && (
//                 <div className="text-sm text-red-500">-{product.discountPercentage}% OFF</div>
//               )}
//             </div>
//           </div>
//           <p className="text-muted-foreground line-clamp-2">{product.description}</p>
//           {product.tags.length > 0 && (
//             <div className="flex gap-2 flex-wrap">
//               {product.tags.map((tag, index) => (
//                 <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center border rounded-md">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="px-4 py-2 border-r hover:bg-muted"
//               >
//                 -
//               </button>
//               <span className="px-4 py-2">{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="px-4 py-2 border-l hover:bg-muted"
//               >
//                 +
//               </button>
//             </div>
//             <Button className="flex-1">Add To Cart</Button>
//             <Button variant="outline" size="icon">
//               <Heart className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// ...............









// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { useSearchParams } from "next/navigation"
// import { Heart, Share2 } from "lucide-react"
// import { Button } from "@/app/components/ui/button"
// // import { Button } from "@/components/ui/button"

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
//       // Create an array of images including the main product image and additional images
//       images: [
//         searchParams.get("productImage") || "/placeholder.svg",
//         "/placeholder.svg?text=Image+2&width=600&height=600",
//         "/placeholder.svg?text=Image+3&width=600&height=600",
//         "/placeholder.svg?text=Image+4&width=600&height=600",
//       ],
//     }
//     setProduct(productData)
//   }, [searchParams])

//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Image Gallery */}
//         <div className="space-y-4">
//           <div className="relative aspect-square overflow-hidden rounded-lg">
//             <Image
//               src={product.images[selectedImage] || "/placeholder.svg"}
//               alt={product.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {product.images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
//                   selectedImage === index ? "border-primary" : "border-transparent"
//                 }`}
//               >
//                 <Image
//                   src={image || "/placeholder.svg"}
//                   alt={`${product.title} thumbnail ${index + 1}`}
//                   fill
//                   className="object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6">
//           {/* Line 1: Title and New badge */}
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold">{product.title}</h1>
//             {product.isNew && <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">New</div>}
//           </div>

//           {/* Line 2: Price, Discount, and Rating */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="text-2xl font-bold">Rs. {product.price}</div>
//               {product.discountPercentage > 0 && (
//                 <div className="text-sm text-red-500">-{product.discountPercentage}% OFF</div>
//               )}
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="flex text-yellow-400">
//                 {"★★★★★".split("").map((star, i) => (
//                   <span key={i}>{star}</span>
//                 ))}
//               </div>
//               <span className="text-sm text-muted-foreground">(5)</span>
//             </div>
//           </div>

//           {/* Line 3: Description */}
//           <p className="text-muted-foreground line-clamp-2">{product.description}</p>

//           {/* Line 4: Tags */}
//           {product.tags.length > 0 && (
//             <div className="flex gap-2 flex-wrap">
//               {product.tags.map((tag, index) => (
//                 <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}

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
//             <Button className="flex-1">Add To Cart</Button>
//             <Button variant="outline" size="icon">
//               <Heart className="h-4 w-4" />
//             </Button>
//           </div>

//           <Button variant="outline" className="w-full">
//             Comparison
//           </Button>

//           <div className="pt-6 border-t">
//             <div className="text-sm">Share:</div>
//             <div className="flex gap-4 mt-2">
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-pink-600 hover:text-pink-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }





































// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { useSearchParams } from "next/navigation"
// import { Heart, Share2 } from "lucide-react"
// import { Button } from "@/app/components/ui/button"
// // import { Button } from "@/components/ui/button"

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
//       // Create an array of images including the main product image and additional images
//       images: Array(4).fill(searchParams.get("productImage") || "/placeholder.svg"),
//     }
//     setProduct(productData)
//   }, [searchParams])

//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-100 to-purple-100">
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Image Gallery */}
//         <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-4 rounded-lg shadow-lg">
//           <div className="space-y-4">
//             <div className="relative aspect-square overflow-hidden rounded-lg">
//               <Image
//                 src={product.images[selectedImage] || "/placeholder.svg"}
//                 alt={product.title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//             <div className="grid grid-cols-4 gap-4">
//               {product.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
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
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6">
//           {/* Line 1: Title and New badge */}
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold text-blue-600">{product.title}</h1>
//             {product.isNew && (
//               <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full animate-pulse">New</div>
//             )}
//           </div>

//           {/* Line 2: Price, Discount, and Rating */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="text-2xl font-bold text-purple-600">Rs. {product.price}</div>
//               {product.discountPercentage > 0 && (
//                 <div className="text-sm text-red-500 font-semibold">-{product.discountPercentage}% OFF</div>
//               )}
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="flex text-yellow-400">
//                 {"★★★★★".split("").map((star, i) => (
//                   <span key={i}>{star}</span>
//                 ))}
//               </div>
//               <span className="text-sm text-muted-foreground">(5)</span>
//             </div>
//           </div>

//           {/* Line 3: Description */}
//           <p className="text-muted-foreground line-clamp-2">{product.description}</p>

//           {/* Line 4: Tags */}
//           {product.tags.length > 0 && (
//             <div className="flex gap-2 flex-wrap">
//               {product.tags.map((tag, index) => (
//                 <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}

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
//               Add To Cart
//             </Button>
//             <Button variant="outline" size="icon">
//               <Heart className="h-4 w-4" />
//             </Button>
//           </div>

//           <Button variant="outline" className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50">
//             Comparison
//           </Button>

//           <div className="pt-6 border-t">
//             <div className="text-sm">Share:</div>
//             <div className="flex gap-4 mt-2">
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-pink-600 hover:text-pink-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.772-1.153c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }












// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { useSearchParams } from "next/navigation"
// import { Heart, Share2 } from "lucide-react"
// import { Button } from "@/app/components/ui/button"

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
//       // Create an array of images including the main product image and additional images
//       images: Array(4).fill(searchParams.get("productImage") || "/placeholder.svg"),
//     }
//     setProduct(productData)
//   }, [searchParams])

//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-100 to-purple-100">
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
//           {/* Line 1: Title and New badge */}
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold text-blue-600">{product.title}</h1>
//             {product.isNew && (
//               <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full animate-pulse">New</div>
//             )}
//           </div>

//           {/* Line 2: Price, Discount, and Rating */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="text-2xl font-bold text-purple-600">Rs. {product.price}</div>
//               {product.discountPercentage > 0 && (
//                 <div className="text-sm text-red-500 font-semibold">-{product.discountPercentage}% OFF</div>
//               )}
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="flex text-yellow-400">
//                 {"★★★★★".split("").map((star, i) => (
//                   <span key={i}>{star}</span>
//                 ))}
//               </div>
//               <span className="text-sm text-muted-foreground">(5)</span>
//             </div>
//           </div>

//           {/* Line 3: Description */}
//           <p className="text-muted-foreground line-clamp-2">{product.description}</p>

//           {/* Line 4: Tags */}
//           {product.tags.length > 0 && (
//             <div className="flex gap-2 flex-wrap">
//               {product.tags.map((tag, index) => (
//                 <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}

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
//               Add To Cart
//             </Button>
//             <Button variant="outline" size="icon">
//               <Heart className="h-4 w-4" />
//             </Button>
//           </div>

//           <Button variant="outline" className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50">
//             Comparison
//           </Button>

//           <div className="pt-6 border-t">
//             <div className="text-sm">Share:</div>
//             <div className="flex gap-4 mt-2">
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-pink-600 hover:text-pink-800">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.772-1.153c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.467-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


























"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Heart, ShoppingCart } from "lucide-react" // Removed unnecessary icons
import { Button } from "@/app/components/ui/button"
import Link from "next/link" // Added Link for navigation
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa" // Social media icons
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
  rating: number // Added rating
}

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState<ProductDetails | null>(null)
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
      rating: Number(searchParams.get("rating")) || 0, // Added rating from URL
      // Create an array of images including the main product image and additional images
      images: Array(4).fill(searchParams.get("productImage") || "/placeholder.svg"),
    }
    setProduct(productData)
  }, [searchParams])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white"> {/* Changed background to white */}
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
                  className={`relative w-16 h-16 overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
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
                className="object-cover max-w-[400px] max-h-[400px]" // Smaller size for main image
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

          {/* Description (Split into 5 lines) */}
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
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

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
    id={Number(product._id)}  // Convert `product._id` to a number
    tags={product.tags.join(", ")}  // Join tags array as a string for display
    isNew={product.isNew}  // Pass isNew as a prop to ProductDetailsComponent
    productName={product.title}  // Pass product title as the product name
    productPrice={product.price}  // Pass product price
    productDescription={product.description}  // Pass product description
    productImage={product.productImage}  // Pass product image URL
    discountPercentage={product.discountPercentage}  // Pass discount percentage
  />
</div>


<div>
   {/* Related Products Section */}
   <Relatedproducts />
</div>
     
    </div>
  )
}












