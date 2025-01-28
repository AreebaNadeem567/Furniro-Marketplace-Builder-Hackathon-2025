// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { Heart, Share2, ArrowRightLeft, ChevronRight } from "lucide-react";
// import { searchName } from "@/globalState/globalState";
// import { useAtom } from "jotai";
// import { Button } from "../components/ui/button";
// import { Card, CardContent, CardFooter } from "../components/ui/card";
// import { ProductFilterBar } from "../components/Filterbar";

// export default function ProductGrid() {
//   interface ProductSection {
//     title: string;
//     description: string;
//     isNew: boolean;
//     tags: string[];
//     price: number;
//     productImage: string;
//     dicountPercentage: number;
//     _id: string;
//   }

//   const [cards, setCards] = useState<ProductSection[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [show, setShow] = useState(8);

//   const itemsPerPage = show;

//   const [search] = useAtom(searchName);

//   useEffect(() => {
//     const fetchData1 = async () => {
//       const res: ProductSection[] = await client.fetch(`
//         *[_type=='product'][] {
//           'productImage':productImage.asset->url,
//           description,
//           dicountPercentage,
//           tags,
//           isNew,
//           title,
//           price
//         }
//       `);

//       setCards(res);
//     };

//     fetchData1();
//   }, []);

//   useEffect(() => {
//     const getData = async () => {
//       let query = `*[_type=='product']`;

//       if (search) {
//         query = `*[_type=='product' && title match '${search}*']`;
//       }

//       query += `{ 'productImage':productImage.asset->url,
//         description,
//         dicountPercentage,
//         tags,
//         isNew,
//         title,
//         price
//       }`;

//       const res: ProductSection[] = await client.fetch(query);
//       setCards(res);
//     };

//     getData();
//   }, [search]); 
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedCards = cards.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(cards.length / itemsPerPage);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [show]);

//   return (
//     <>
//       <section className="bg-[url('/images/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 overflow-hidden">
//         <div className="container mx-auto px-4 text-center">
//           <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
//           <h1 className="text-3xl md:text-4xl font-medium mb-4">Shop</h1>
//           <div className="flex items-center justify-center gap-2 text-sm">
//             <Link href="/" className="hover:underline">
//               Home
//             </Link>
//             <ChevronRight className="w-4 h-4" />
//             <span>Shop</span>
//           </div>
//         </div>
//       </section>
//       <ProductFilterBar show={show} setShow={setShow} />

//       <div className="container mx-auto px-4 md:px-6 lg:px-8 overflow-hidden">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {paginatedCards.map((item: ProductSection, index: number) => (
//             <Card
//               key={index}
//               className="group relative overflow-hidden shadow-md"
//             >
//               <div className="relative aspect-square max-w-full">
//                 <Image
//                   src={item.productImage}
//                   alt={item.title}
//                   fill
//                   className="object-center transition-transform group-hover:scale-105"
//                 />
//               </div>

//               {/* Card isNew/Old */}
//               {item.isNew && (
//                 <div
//                   className={`absolute left-4 top-4 rounded-full px-3 py-2 text-sm text-white
//                     ${item.isNew ? "bg-green-500" : "bg-red-500"}`}
//                 >
//                   {item.isNew ? "New" : `-${item.dicountPercentage}%`}
//                 </div>
//               )}

//               {/* Discount Percentage */}
//               {item.dicountPercentage > 0 && (
//                 <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm text-white bg-red-500">
//                   -{item.dicountPercentage}%
//                 </div>
//               )}

//               {/* Hover Content */}
//               <div className="absolute inset-0 bg-black bg-opacity-0 transition-all group-hover:bg-opacity-40 z-10 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
//                 <Link
//                   href={`/shop/ProductDetails?id=${index}&productName=${item.title}&productPrice=${item.price}&productImage=${item.productImage}&productDescription=${item.description}&productdicountPercentage=${item.dicountPercentage}&tags=${item.tags}&isNew=${item.isNew}`}
//                 >
//                   <Button className="w-[202px] bg-white hover:bg-gray-200 text-black transition-all">
//                     Add to Cart
//                   </Button>
//                 </Link>
//                 <div className="flex justify-between w-[202px] py-2">
//                   <Button variant="no" size="icon" className="text-white">
//                     <Share2 className="h-4 w-4" /> Share
//                   </Button>
//                   <Button variant="no" size="icon" className="text-white">
//                     <ArrowRightLeft className="h-4 w-4" /> Compare
//                   </Button>
//                   <Button variant="no" size="icon" className="text-white">
//                     <Heart className="h-4 w-4" /> Like
//                   </Button>
//                 </div>
//               </div>

//               <CardContent className="p-4">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-sm text-gray-500">
//                   {item.description.slice(0, 20)}...
//                 </p>
//               </CardContent>
//               <CardFooter className="flex flex-col items-start gap-4 p-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg font-bold">Rs. {item.price}</span>
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-8 flex justify-center gap-2 flex-wrap">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <Button
//               key={index}
//               variant={currentPage === index + 1 ? "default" : "outline"}
//               className="w-12"
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </Button>
//           ))}
//           <Button
//             variant="outline"
//             className="w-20"
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//           >
//             Next
//           </Button>
//         </div>
//       </div>

//       {/* <Shopbottombar /> */}
//     </>
//   );
// }




// // *[_type=="product"] {
// //   _id,
// //   title,
// //   description,
// //   "imageUrl": productImage.asset->url,
// //   price,
// //   dicountPercentage,
// //   isNew
// // }

















// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Heart, Share2, ArrowRightLeft, ChevronRight } from "lucide-react";
// import { searchName } from "@/globalState/globalState";
// import { useAtom } from "jotai";
// import { Button } from "../components/ui/button";
// import { Card, CardContent, CardFooter } from "../components/ui/card";
// import { ProductFilterBar } from "../components/Filterbar";
// import { client } from "@/sanity/lib/client";

// // Define the Product type
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
//       *[_type == 'product'][] {
//         'productImage': productImage.asset->url,
//         description,
//         dicountPercentage,
//         tags,
//         isNew,
//         title,
//         price,
//         _id
//       }
//     `);
    
//     return products; // Return the fetched products
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return []; // Return an empty array if there's an error
//   }
// }

// export default function ProductGrid() {
//   const [cards, setCards] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [show, setShow] = useState(8);
//   const itemsPerPage = show;
//   const [search] = useAtom(searchName);

//   useEffect(() => {
//     const fetchData = async () => {
//       const products = await getProducts(); // Fetch real products from Sanity
//       setCards(products); // Update the state with fetched products
//     };
    
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const getData = () => {
//       let filteredCards = cards;

//       if (search) {
//         filteredCards = cards.filter(item =>
//           item.title.toLowerCase().includes(search.toLowerCase())
//         );
//       }

//       setCards(filteredCards); // Update the cards based on the search
//     };

//     getData();
//   }, [search, cards]);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedCards = cards.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(cards.length / itemsPerPage);

//   useEffect(() => {
//     setCurrentPage(1); // Reset to page 1 when 'show' changes
//   }, [show]);

//   return (
//     <>
//       <section className="bg-[url('/images/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 overflow-hidden">
//         <div className="container mx-auto px-4 text-center">
//           <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
//           <h1 className="text-3xl md:text-4xl font-medium mb-4">Shop</h1>
//           <div className="flex items-center justify-center gap-2 text-sm">
//             <Link href="/" className="hover:underline">
//               Home
//             </Link>
//             <ChevronRight className="w-4 h-4" />
//             <span>Shop</span>
//           </div>
//         </div>
//       </section>
//       <ProductFilterBar show={show} setShow={setShow} />

//       <div className="container mx-auto px-4 md:px-6 lg:px-8 overflow-hidden">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {paginatedCards.map((item: Product, index: number) => (
//             <Card key={item._id} className="group relative overflow-hidden shadow-md">
//               <div className="relative aspect-square max-w-full">
//                 <Image
//                   src={item.productImage}
//                   alt={item.title}
//                   fill
//                   className="object-center transition-transform group-hover:scale-105"
//                 />
//               </div>

//               {/* Card isNew/Old */}
//               {item.isNew && (
//                 <div
//                   className={`absolute left-4 top-4 rounded-full px-3 py-2 text-sm text-white
//                     ${item.isNew ? "bg-green-500" : "bg-red-500"}`}
//                 >
//                   {item.isNew ? "New" : `-${item.dicountPercentage}%`}
//                 </div>
//               )}

//               {/* Discount Percentage */}
//               {item.dicountPercentage > 0 && (
//                 <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm text-white bg-red-500">
//                   -{item.dicountPercentage}%
//                 </div>
//               )}

//               {/* Hover Content */}
//               <div className="absolute inset-0 bg-black bg-opacity-0 transition-all group-hover:bg-opacity-40 z-10 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
//                 <Link
//                   href={`/shop/ProductDetails?id=${item._id}&productName=${item.title}&productPrice=${item.price}&productImage=${item.productImage}&productDescription=${item.description}&productdicountPercentage=${item.dicountPercentage}&tags=${item.tags}&isNew=${item.isNew}`}
//                 >
//                   <Button className="w-[202px] bg-white hover:bg-gray-200 text-black transition-all">
//                     Add to Cart
//                   </Button>
//                 </Link>
//                 <div className="flex justify-between w-[202px] py-2">
//                   <Button variant="no" size="icon" className="text-white">
//                     <Share2 className="h-4 w-4" /> Share
//                   </Button>
//                   <Button variant="no" size="icon" className="text-white">
//                     <ArrowRightLeft className="h-4 w-4" /> Compare
//                   </Button>
//                   <Button variant="no" size="icon" className="text-white">
//                     <Heart className="h-4 w-4" /> Like
//                   </Button>
//                 </div>
//               </div>

//               <CardContent className="p-4">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-sm text-gray-500">
//                   {item.description.slice(0, 20)}...
//                 </p>
//               </CardContent>
//               <CardFooter className="flex flex-col items-start gap-4 p-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg font-bold">Rs. {item.price}</span>
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-8 flex justify-center gap-2 flex-wrap">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <Button
//               key={index}
//               variant={currentPage === index + 1 ? "default" : "outline"}
//               className="w-12"
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </Button>
//           ))}
//           <Button
//             variant="outline"
//             className="w-20"
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }

















// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Heart, Share2, ArrowRightLeft, ChevronRight } from "lucide-react";
// import { searchName } from "@/globalState/globalState";
// import { useAtom } from "jotai";
// import { Button } from "../components/ui/button";
// import { Card, CardContent, CardFooter } from "../components/ui/card";
// import { ProductFilterBar } from "../components/Filterbar";
// import { client } from "@/sanity/lib/client";  // Import your client

// // Define the Product type to match your Sanity schema
// interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   isNew: boolean;
//   tags: string[];
//   price: number;
//   productImage: string;
//   dicountPercentage: number;
// }

// // Fetch products from your Sanity CMS
// async function getProducts(): Promise<Product[]> {
//   try {
//     // Adjust the query based on your Sanity schema
//     const products = await client.fetch(`
//       *[_type == 'product'] {
//         _id,
//         title,
//         description,
//         price,
//         dicountPercentage,
//         isNew,
//         tags,
//         'productImage': productImage.asset->url // Fetch product image URL
//       }
//     `);

//     return products; // Return the fetched products
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return []; // Return an empty array if there's an error
//   }
// }

// export default function ProductGrid() {
//   const [cards, setCards] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [show, setShow] = useState(8);
//   const itemsPerPage = show;
//   const [search] = useAtom(searchName);

//   // Fetch data from Sanity on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       const products = await getProducts(); // Fetch your products from Sanity
//       setCards(products); // Set the state with the fetched products
//     };
    
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const getData = () => {
//       let filteredCards = cards;

//       if (search) {
//         filteredCards = cards.filter(item =>
//           item.title.toLowerCase().includes(search.toLowerCase())
//         );
//       }

//       setCards(filteredCards); // Set the filtered cards based on search
//     };

//     getData();
//   }, [search, cards]);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedCards = cards.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(cards.length / itemsPerPage);

//   useEffect(() => {
//     setCurrentPage(1); // Reset page when 'show' changes
//   }, [show]);

//   return (
//     <>
//       <section className="bg-[url('/images/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 overflow-hidden">
//         <div className="container mx-auto px-4 text-center">
//           <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
//           <h1 className="text-3xl md:text-4xl font-medium mb-4">Shop</h1>
//           <div className="flex items-center justify-center gap-2 text-sm">
//             <Link href="/" className="hover:underline">
//               Home
//             </Link>
//             <ChevronRight className="w-4 h-4" />
//             <span>Shop</span>
//           </div>
//         </div>
//       </section>
//       <ProductFilterBar show={show} setShow={setShow} />

//       <div className="container mx-auto px-4 md:px-6 lg:px-8 overflow-hidden">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {paginatedCards.map((item: Product, index: number) => (
//             <Card key={item._id} className="group relative overflow-hidden shadow-md">
//               <div className="relative aspect-square max-w-full">
//                 <Image
//                   src={item.productImage}
//                   alt={item.title}
//                   fill
//                   className="object-center transition-transform group-hover:scale-105"
//                 />
//               </div>

//               {/* Card isNew/Old */}
//               {item.isNew && (
//                 <div
//                   className={`absolute left-4 top-4 rounded-full px-3 py-2 text-sm text-white
//                     ${item.isNew ? "bg-green-500" : "bg-red-500"}`}
//                 >
//                   {item.isNew ? "New" : `-${item.dicountPercentage}%`}
//                 </div>
//               )}

//               {/* Discount Percentage */}
//               {item.dicountPercentage > 0 && (
//                 <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm text-white bg-red-500">
//                   -{item.dicountPercentage}%
//                 </div>
//               )}

//               {/* Hover Content */}
//               <div className="absolute inset-0 bg-black bg-opacity-0 transition-all group-hover:bg-opacity-40 z-10 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
//                 <Link
//                   href={`/shop/ProductDetails?id=${item._id}&productName=${item.title}&productPrice=${item.price}&productImage=${item.productImage}&productDescription=${item.description}&productdicountPercentage=${item.dicountPercentage}&tags=${item.tags}&isNew=${item.isNew}`}
//                 >
//                   <Button className="w-[202px] bg-white hover:bg-gray-200 text-black transition-all">
//                     Add to Cart
//                   </Button>
//                 </Link>
//                 <div className="flex justify-between w-[202px] py-2">
//                   <Button variant="no" size="icon" className="text-white">
//                     <Share2 className="h-4 w-4" /> Share
//                   </Button>
//                   <Button variant="no" size="icon" className="text-white">
//                     <ArrowRightLeft className="h-4 w-4" /> Compare
//                   </Button>
//                   <Button variant="no" size="icon" className="text-white">
//                     <Heart className="h-4 w-4" /> Like
//                   </Button>
//                 </div>
//               </div>

//               <CardContent className="p-4">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-sm text-gray-500">
//                   {item.description.slice(0, 20)}...
//                 </p>
//               </CardContent>
//               <CardFooter className="flex flex-col items-start gap-4 p-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg font-bold">Rs. {item.price}</span>
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-8 flex justify-center gap-2 flex-wrap">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <Button
//               key={index}
//               variant={currentPage === index + 1 ? "default" : "outline"}
//               className="w-12"
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </Button>
//           ))}
//           <Button
//             variant="outline"
//             className="w-20"
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }


















"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Share2, ArrowRightLeft, ChevronRight, X } from "lucide-react";
import { searchName } from "@/globalState/globalState";
import { useAtom } from "jotai";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { ProductFilterBar } from "../components/Filterbar";
import { client } from "@/sanity/lib/client";  // Import your client

// Define the Product type to match your Sanity schema
interface Product {
  _id: string;
  title: string;
  description: string;
  isNew: boolean;
  tags: string[]; // Assuming this represents categories
  price: number;
  productImage: string;
  dicountPercentage: number;
}

// Fetch products from your Sanity CMS
async function getProducts(): Promise<Product[]> {
  try {
    // Adjust the query based on your Sanity schema
    const products = await client.fetch(`
      *[_type == 'product'] {
        _id,
        title,
        description,
        price,
        dicountPercentage,
        isNew,
        tags,
        'productImage': productImage.asset->url // Fetch product image URL
      }
    `);

    return products; // Return the fetched products
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array if there's an error
  }
}

export default function ProductGrid() {
  const [cards, setCards] = useState<Product[]>([]); 
  const [filteredCards, setFilteredCards] = useState<Product[]>([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(8);
  const itemsPerPage = show;
  const [search, setSearch] = useAtom(searchName);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); 

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts(); 
      setCards(products); 
      setFilteredCards(products); 
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getData = () => {
      let filtered = cards;

      if (search) {
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (selectedCategory) {
        filtered = filtered.filter(item =>
          item.tags.includes(selectedCategory)
        );
      }

      setFilteredCards(filtered); 
    };
    getData();
  }, [search, selectedCategory, cards]); 

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCards = filteredCards.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1); 
  }, [show]);

  const categories = Array.from(new Set(cards.flatMap(item => item.tags)));

  return (
    <>
      <section className="bg-[url('/images/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Shop</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Shop</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-4 flex justify-between relative">
        {/* Search Bar */}
        <div className="w-full sm:w-1/2 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 sm:p-1 border rounded-md sm:w-64"
            placeholder="Search products..."
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute top-2 right-2 text-gray-500"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 sm:p-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ProductFilterBar show={show} setShow={setShow} />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedCards.map((item: Product, index: number) => (
            <Card key={item._id} className="group relative overflow-hidden shadow-md">
              <div className="relative aspect-square max-w-full">
                <Image
                  src={item.productImage}
                  alt={item.title}
                  fill
                  className="object-center transition-transform group-hover:scale-105"
                />
              </div>

              {item.isNew && (
                <div
                  className={`absolute left-4 top-4 rounded-full px-3 py-2 text-sm text-white
                    ${item.isNew ? "bg-green-500" : "bg-red-500"}`}
                >
                  {item.isNew ? "New" : `-${item.dicountPercentage}%`}
                </div>
              )}

              {item.dicountPercentage > 0 && (
                <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm text-white bg-red-500">
                  -{item.dicountPercentage}%
                </div>
              )}

              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all group-hover:bg-opacity-40 z-10 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                <Link
                  href={`/shop/ProductDetails?id=${item._id}&productName=${item.title}&productPrice=${item.price}&productImage=${item.productImage}&productDescription=${item.description}&productdicountPercentage=${item.dicountPercentage}&tags=${item.tags}&isNew=${item.isNew}`}
                >
                  <Button className="w-[202px] bg-white hover:bg-gray-200 text-black transition-all">
                    Add to Cart
                  </Button>
                </Link>
                <div className="flex justify-between w-[202px] py-2">
                  <Button variant="no" size="icon" className="text-white">
                    <Share2 className="h-4 w-4" /> Share
                  </Button>
                  <Button variant="no" size="icon" className="text-white">
                    <ArrowRightLeft className="h-4 w-4" /> Compare
                  </Button>
                  <Button variant="no" size="icon" className="text-white">
                    <Heart className="h-4 w-4" /> Like
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.description.slice(0, 20)}...
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 p-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">Rs. {item.price}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "default" : "outline"}
              className="w-12"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            className="w-20"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}




















