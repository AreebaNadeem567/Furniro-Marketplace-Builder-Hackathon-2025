// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";



// interface Product {
//   title: string;
//   description: string;
//   imageUrl: string;
//   price: number;
//   discountPercentage: number | null;
//   isNew: boolean;
// }

// // Fetch products from Sanity
// async function getProducts(): Promise<Product[]> {
//   const products = await client.fetch(`
//     *[_type=="product"] {
//       title,
//       description,
//       "imageUrl": productImage.asset->url,
//       price,
//       discountPercentage,
//       isNew
//     }
//   `);

//   // Remove duplicates by imageUrl or title
//   const uniqueProducts = products.filter(
//     (product: Product, index: number, self: Product[]) =>
//       index ===
//       self.findIndex(
//         (p) =>
//           p.imageUrl === product.imageUrl ||
//           p.title.toLowerCase() === product.title.toLowerCase()
//       )
//   );

//   return uniqueProducts;
// }

// // ProductCard Component
// function ProductCard({
//   price,
//   discountPercentage,
//   isNew,
//   title,
//   description,
//   imageUrl,
// }: Product) {
//   return (
//     <Card className="w-full max-w-sm overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//       <CardHeader className="p-0">
//         <div className="relative w-full h-80">
//           <Image
//             src={imageUrl || "/placeholder.svg"}
//             alt={title}
//             fill
//             style={{ objectFit: "cover" }}
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//           {isNew && (
//             <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">
//               New
//             </Badge>
//           )}
//         </div>
//       </CardHeader>
//       <CardContent className="p-4">
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold">${price.toFixed(2)}</span>
//           {discountPercentage && (
//             <Badge variant="outline" className="text-green-600">
//               {discountPercentage}% OFF
//             </Badge>
//           )}
//         </div>
//       </CardContent>
//       <CardFooter className="p-4 pt-0"></CardFooter>
//     </Card>
//   );
// }

// // Home Component
// export default async function Home() {
//   const products = await getProducts();

//   // Only keep the first 12 unique products
//   const limitedProducts = products.slice(0, 12);

//   return (
//     <main className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {limitedProducts.map((product, index) => (
//           <ProductCard key={index} {...product} />
//         ))}
//       </div>
//     </main>
//   );
// }










// .......................... 1



// import { client } from "@/sanity/lib/client"
// import { Badge } from "lucide-react"
// import Image from "next/image"
// import { Card, CardHeader, CardContent } from "../components/ui/card"

// interface Product {
//   title: string
//   description: string
//   imageUrl: string
//   price: number
//   discountPercentage: number | null
//   isNew: boolean
// }

// // Fetch products from Sanity
// async function getProducts(): Promise<Product[]> {
//   try {
//     const products = await client.fetch(`
//       *[_type=="product"] {
//         title,
//         description,
//         "imageUrl": productImage.asset->url,
//         price,
//         discountPercentage,
//         isNew
//       }
//     `)

//     // Remove duplicates by imageUrl or title
//     const uniqueProducts = products.filter(
//       (product: Product, index: number, self: Product[]) =>
//         index === self.findIndex((p) => p.imageUrl === product.imageUrl || p.title.toLowerCase() === product.title.toLowerCase())
//     )

//     return uniqueProducts
//   } catch (error) {
//     console.error("Error fetching products:", error)
//     return []
//   }
// }

// // ProductCard Component
// function ProductCard({ price, discountPercentage, isNew, title, description, imageUrl }: Product) {
//   return (
//     <Card className="w-full max-w-sm overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//       <CardHeader className="p-0">
//         <div className="relative w-full h-80">
//           <Image
//             src={imageUrl || "/placeholder.svg"} // Fallback to placeholder image if imageUrl is missing
//             alt={title}
//             fill
//             style={{ objectFit: "cover" }}
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//           {isNew && <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">New</Badge>}
//         </div>
//       </CardHeader>
//       <CardContent className="p-4">
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold">${price.toFixed(2)}</span>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// // Home Component
// export default async function Home() {
//   const products = await getProducts()

//   // Only keep the first 12 unique products
//   const limitedProducts = products.slice(0, 12)

//   return (
//     <main className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {limitedProducts.map((product, index) => (
//           <ProductCard key={index} {...product} />
//         ))}
//       </div>
//     </main>
//   )
// }















// import { client } from "@/sanity/lib/client" // Added client import
import { Badge } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "../components/ui/card"
import { client } from "@/sanity/lib/client"

interface Product {
  title: string
  description: string
  imageUrl: string
  price: number
  discountPercentage: number | null
  isNew: boolean
}

// Fetch products from Sanity
async function getProducts(): Promise<Product[]> {
  try {
    const products = await client.fetch(`
      *[_type=="product"] {
        title,
        description,
        "imageUrl": productImage.asset->url,
        price,
        discountPercentage,
        isNew
      }
    `)

    return products
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

// ProductCard Component
function ProductCard({ price, discountPercentage, isNew, title, description, imageUrl }: Product) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative w-full h-80">
          <Image
            src={imageUrl || "/placeholder.svg"} // Fallback to placeholder image if imageUrl is missing
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {isNew && <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">New</Badge>}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${price.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}

// Home Component
export default async function Home() {
  const products = await getProducts()

  // Only keep the first 12 unique products
  const uniqueProducts = products.filter(
    (product: Product, index: number, self: Product[]) =>
      index === self.findIndex(
        (p) => p.imageUrl === product.imageUrl || p.title.toLowerCase() === product.title.toLowerCase()
      )
  )

  const limitedProducts = uniqueProducts.slice(0, 12)

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitedProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </main>
  )
}
















