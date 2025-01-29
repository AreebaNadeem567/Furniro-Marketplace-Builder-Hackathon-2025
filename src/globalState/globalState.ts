import { atom } from "jotai"


export const searchName = atom("")











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
