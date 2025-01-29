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



//....................................





// import { client } from "@/sanity/lib/client";
// import { Badge } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight, Share2, ArrowRightLeft, Heart } from "lucide-react";
// import { Card, CardHeader, CardContent, CardFooter } from "../components/ui/card";
// import { Button } from "../components/ui/button";

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

// async function getProducts(): Promise<Product[]> {
//   try {
//     const products = await client.fetch(`
//       *[_type=='product'][] {
//         'productImage': productImage.asset->url,
//         description,
//         dicountPercentage,
//         tags,
//         isNew,
//         title,
//         price
//       }
//     `);

//     const uniqueProducts = products.filter(
//       (product: Product, index: number, self: Product[]) =>
//         index === self.findIndex((p) => p.productImage === product.productImage || p.title.toLowerCase() === product.title.toLowerCase())
//     );

//     return uniqueProducts;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }

// function ProductCard({ price, dicountPercentage, isNew, title, productImage, description, _id, tags }: Product) {
//   return (
//     <Card className="w-full max-w-sm overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group relative">
//       <CardHeader className="p-0">
//         <div className="relative w-full h-80">
//           <Image
//             src={productImage || "/placeholder.svg"}
//             alt={title}
//             fill
//             style={{ objectFit: "cover" }}
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//           {isNew && <div className="absolute left-4 top-4 rounded-full px-3 py-2 text-sm text-white bg-green-500">New</div>}
//           {dicountPercentage > 0 && <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm text-white bg-red-500">-{dicountPercentage}%</div>}
//         </div>
//       </CardHeader>

//       <div className="absolute inset-0 bg-black bg-opacity-0 transition-all group-hover:bg-opacity-40 z-10 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
//         <Link href={`/shop/ProductDetails?id=${_id}&productName=${title}&productPrice=${price}&productImage=${productImage}&productDescription=${description}&productdicountPercentage=${dicountPercentage}&tags=${tags}&isNew=${isNew}`}>
//           <Button className="w-[202px] bg-white hover:bg-gray-200 text-black transition-all">
//             Add to Cart
//           </Button>
//         </Link>
//         <div className="flex justify-between w-[202px] py-2">
//           <Button variant="no" size="icon" className="text-white">
//             <Share2 className="h-4 w-4" /> Share
//           </Button>
//           <Button variant="no" size="icon" className="text-white">
//             <ArrowRightLeft className="h-4 w-4" /> Compare
//           </Button>
//           <Button variant="no" size="icon" className="text-white">
//             <Heart className="h-4 w-4" /> Like
//           </Button>
//         </div>
//       </div>

//       <CardContent className="p-4">
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-sm text-gray-500">{description.slice(0, 20)}...</p>
//       </CardContent>
//       <CardFooter className="flex flex-col items-start gap-4 p-4">
//         <div className="flex items-center gap-2">
//           <span className="text-lg font-bold">Rs. {price}</span>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

// export default async function Home() {
//   const products = await getProducts();
//   const limitedProducts = products.slice(0, 33);

//   return (
//     <main className="bg-white">
//       <div className="relative h-[280px] w-full">
//         <Image
//           src="/images/comparison-bg.png"
//           alt="Comparison background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 " />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <Image
//             src="/images/logo-short.png"
//             alt="Logo"
//             width={70}
//             height={70}
//             quality={100}
//             className="mb-0"
//           />
//           <h1 className="text-4xl font-semibold mb-4">Shop</h1>
//           <div className="flex items-center gap-2 text-sm">
//             <Link href="/" className="hover:underline">
//               Home
//             </Link>
//             <ChevronRight className="w-4 h-4" />
//             <span>Shop</span>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {limitedProducts.map((product, index) => (
//             <ProductCard key={index} {...product} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }






"use client"






import { useState, useEffect } from "react"; // import useState and useEffect
import { client } from "@/sanity/lib/client";
import { ChevronRight, Share2, ArrowRightLeft, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface Product {
  title: string;
  description: string;
  isNew: boolean;
  tags: string[];
  price: number;
  productImage: string;
  dicountPercentage: number;
  _id: string;
}

async function getProducts(): Promise<Product[]> {
  try {
    const products = await client.fetch(`
      *[_type=='product'][] {
        'productImage': productImage.asset->url,
        description,
        dicountPercentage,
        tags,
        isNew,
        title,
        price
      }
    `);

    const uniqueProducts = products.filter(
      (product: Product, index: number, self: Product[]) =>
        index === self.findIndex((p) => p.productImage === product.productImage || p.title.toLowerCase() === product.title.toLowerCase())
    );

    return uniqueProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

function ProductCard({ price, dicountPercentage, isNew, title, productImage, description, _id, tags }: Product) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-80">
          <Image
            src={productImage || "/placeholder.svg"}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {isNew && <div className="absolute left-4 top-4 rounded-full px-3 py-2 text-sm text-white bg-green-500">New</div>}
          {dicountPercentage > 0 && <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm text-white bg-red-500">-{dicountPercentage}%</div>}
        </div>
      </CardHeader>

      <div className="absolute inset-0 bg-black bg-opacity-0 transition-all group-hover:bg-opacity-40 z-10 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
        <Link href={`/shop/ProductDetails?id=${_id}&productName=${title}&productPrice=${price}&productImage=${productImage}&productDescription=${description}&productdicountPercentage=${dicountPercentage}&tags=${tags}&isNew=${isNew}`}>
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
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description.slice(0, 20)}...</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">Rs. {price}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setTotalPages(Math.ceil(fetchedProducts.length / productsPerPage));
    };
    fetchProducts();
  }, []);

  const limitedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="bg-white">
      <div className="relative h-[280px] w-full">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-0"
          />
          <h1 className="text-4xl font-semibold mb-4">Shop</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Shop</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {limitedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              variant="no"
              className={`text-white px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-600' : 'bg-gray-600'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
