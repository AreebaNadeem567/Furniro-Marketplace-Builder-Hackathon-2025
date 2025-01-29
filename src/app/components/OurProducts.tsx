import { client } from "@/sanity/lib/client"
import { Badge } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "../components/ui/card"

// Adjust the interface name to Product to match the returned data structure
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

// Fetch products from Sanity
async function getProducts(): Promise<Product[]> {
  try {
    const products = await client.fetch(`
      *[_type=='product'][] {
        'productImage': productImage.asset->url,  // Fetching image URL
        description,
        dicountPercentage,
        tags,
        isNew,
        title,
        price
      }
    `)

    // Remove duplicates by productImage or title
    const uniqueProducts = products.filter(
      (product: Product, index: number, self: Product[]) =>
        index === self.findIndex((p) => p.productImage === product.productImage || p.title.toLowerCase() === product.title.toLowerCase())
    )

    return uniqueProducts
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

// ProductCard Component
function ProductCard({ price, dicountPercentage, isNew, title, productImage }: Product) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative w-full h-80">
          <Image
            src={productImage || "/placeholder.svg"} // Fallback to placeholder image if productImage is missing
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

  // Only keep the first 6 unique products
  const limitedProducts = products.slice(0, 6)

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-6xl font-bold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitedProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </main>
  )
}










