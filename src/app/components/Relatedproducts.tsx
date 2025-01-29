// "use client";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// interface Product {
//   title: string;
//   description: string;
//   isNew: boolean;
//   tags: string[];
//   price: number;
//   productImage: string;
//   discountPercentage: number;
//   _id: string;
// }

// // Fetch products from Sanity
// async function getProducts(): Promise<Product[]> {
//   try {
//     const products: Product[] = await client.fetch(`
//       *[_type=='product'][] {
//         'productImage': productImage.asset->url,  // Fetching image URL
//         description,
//         discountPercentage,  // Fixed typo here
//         tags,
//         isNew,
//         title,
//         price,
//         _id  // Included _id for use in mapping/rendering
//       }
//     `);

//     return products;
//   } catch (error) {
//     console.error("Error fetching products: ", error);
//     return [];  // Return an empty array in case of an error
//   }
// }

// export default function RelatedProducts() {
//   const [cards, setCards] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const products = await getProducts();
//       setCards(products);
//     };

//     fetchData();
//   }, []);

//   return (
//     <section className="py-12 overflow-hidden">
//       <div className="container px-4 md:px-6 mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-10">
//           Related Products
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-4">
//         {cards
//           .slice(0, 4) // Limiting to 4 items
//           .map((item: Product) => (
//             <div
//               key={item._id}
//               className="bg-white border border-gray-200 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform duration-300"
//             >
//               <div className="relative w-full h-[250px] overflow-hidden rounded-t-lg">
//                 <Image
//                   src={item.productImage}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
//                   {item.title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-500">
//                   {item.description.slice(0, 20)}...
//                 </p>
//                 <div className="mt-2 flex items-center gap-2">
//                   <span className="text-sm font-medium text-gray-900">
//                     Rs.{item.price}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>

//       <div className="flex justify-center mt-10">
//         <Link
//           href="/shop"
//           className="inline-flex items-center justify-center px-8 py-3 border border-[#b88e2f] hover:bg-[#b88e2f] hover:text-white transition-colors text-[#b88e2f]"
//         >
//           Search More
//         </Link>
//       </div>
//     </section>
//   );
// }























"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Adjusted interface name to Product to match the returned data structure
interface Product {
  title: string;
  description: string;
  isNew: boolean;
  tags: string[];
  price: number;
  productImage: string;
  discountPercentage: number;  // Corrected typo here
  _id: string;
}

// Fetch products from Sanity
async function getProducts(): Promise<Product[]> {
  try {
    const products = await client.fetch(`
      *[_type=='product'][] {
        'productImage': productImage.asset->url,  // Fetching image URL
        description,
        discountPercentage,  // Corrected typo here
        tags,
        isNew,
        title,
        price,
        _id  // Included _id for use in mapping/rendering
      }
    `);

    return products;
  } catch (error) {
    console.error("Error fetching products: ", error);
    return [];  // Return an empty array in case of an error
  }
}

export default function RelatedProducts() {
  const [cards, setCards] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setCards(products);
    };

    fetchData();
  }, []);

  return (
    <section className="py-12 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10">
          Related Products
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-4">
        {cards
          .slice(0, 4) // Limiting to 4 items
          .map((item: Product) => (
            <div
              key={item._id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <div className="relative w-full h-[250px] overflow-hidden rounded-t-lg">
                <Image
                  src={item.productImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.description.slice(0, 20)}...
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    Rs.{item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/shop"
          className="inline-flex items-center justify-center px-8 py-3 border border-[#b88e2f] hover:bg-[#b88e2f] hover:text-white transition-colors text-[#b88e2f]"
        >
          Search More
        </Link>
      </div>
    </section>
  );
}
