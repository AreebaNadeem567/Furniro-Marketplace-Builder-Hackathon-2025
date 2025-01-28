// import Image from "next/image";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
// import PostCreator from "./Comments";

// export default function ProductDetails(props: {
//   id: number;
//   tags: string;
//   productName: string;
//   isNew: boolean;
//   productDescription: string;
//   productImage: string;
//   productPrice: number;
//   discountPercentage: number;
// }) {
//   const {
//     id,
//     tags,
//     productName,
//     isNew,
//     productDescription,
//     productImage,
//     productPrice,
//     discountPercentage,
//   } = props;

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 overflow-hidden">
//       {/* Tabs for Description, Additional Information, and Reviews */}
//       <Tabs defaultValue="description" className="w-full">
//         {/* Tab navigation list with 3 items */}
//         <TabsList className="flex justify-start gap-2 mb-4 sm:mb-8 flex-wrap sm:flex-nowrap">
//           <TabsTrigger
//             value="description"
//             className="text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors w-auto"
//           >
//             Description
//           </TabsTrigger>
//           <TabsTrigger
//             value="additional"
//             className="text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors w-auto"
//           >
//             Additional Information
//           </TabsTrigger>
//           <TabsTrigger
//             value="reviews"
//             className="text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors w-auto"
//           >
//             Reviews
//           </TabsTrigger>
//         </TabsList>

//         {/* Tab content for "Description" */}
//         <TabsContent value="description" className="space-y-4 sm:space-y-6">
//           <div className="prose max-w-none">
//             <p className="text-gray-600 leading-relaxed">
//               {productDescription}
//             </p>
//           </div>
//           {/* Grid layout for images */}
//           <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
//             <div className="bg-[#f9f1e7] flex justify-center items-center w-[90%] sm:w-[350px] h-[350px] rounded-lg p-4 sm:p-8">
//               <Image
//                 src={productImage}
//                 alt="product image"
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <div className="bg-[#f9f1e7] flex justify-center items-center w-[90%] sm:w-[350px] h-[350px] rounded-lg p-4 sm:p-8">
//               <Image
//                 src={productImage}
//                 alt="product image"
//                 width={200}
//                 height={200}
//               />
//             </div>
//           </div>
//         </TabsContent>

//         {/* Tab content for "Additional Information" */}
//         <TabsContent value="additional">
//           <div className="prose max-w-none flex flex-col gap-6">
//             <h2 className="text-lg sm:text-2xl font-bold">
//               {productName}
//             </h2>
//             <p>New/Old: {isNew ? "New" : "Old"}</p>
//             <p>Tags: {tags}</p>
//             <p>
//               Price:
//               <span className="text-black font-bold"> Rs. {productPrice}</span>
//             </p>
//             <p>
//               Discount:{" "}
//               <span className="text-black font-bold">
//                 {discountPercentage}%
//               </span>
//             </p>
//             <p className="text-gray-600">{productDescription}</p>
//           </div>
//         </TabsContent>

//         {/* Tab content for "Reviews" */}
//         <TabsContent value="reviews">
//           <div className="prose max-w-none flex flex-col gap-6">
//             <PostCreator blog_id={id} />
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }












import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import PostCreator from "./Comments";
import { client } from "@/sanity/lib/client";
// import { client } from "./path/to/sanityClient"; // Make sure to import your Sanity client setup

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discountPercentage: number | null;
  isNew: boolean;
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
    `);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default function ProductDetails(props: {
  id: number;
  tags: string;
  productName: string;
  isNew: boolean;
  productDescription: string;
  productImage: string;
  productPrice: number;
  discountPercentage: number;
}) {
  const {
    id,
    tags,
    productName,
    isNew,
    productDescription,
    productImage,
    productPrice,
    discountPercentage,
  } = props;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 overflow-hidden">
      {/* Tabs for Description, Additional Information, and Reviews */}
      <Tabs defaultValue="description" className="w-full">
        {/* Tab navigation list with 3 items */}
        <TabsList className="flex justify-start gap-2 mb-4 sm:mb-8 flex-wrap sm:flex-nowrap">
          <TabsTrigger
            value="description"
            className="text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors w-auto"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="additional"
            className="text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors w-auto"
          >
            Additional Information
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors w-auto"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        {/* Tab content for "Description" */}
        <TabsContent value="description" className="space-y-4 sm:space-y-6">
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              {productDescription}
            </p>
          </div>
          {/* Grid layout for images */}
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-[#f9f1e7] flex justify-center items-center w-[90%] sm:w-[350px] h-[350px] rounded-lg p-4 sm:p-8">
              <Image
                src={productImage}
                alt="product image"
                width={200}
                height={200}
              />
            </div>
            <div className="bg-[#f9f1e7] flex justify-center items-center w-[90%] sm:w-[350px] h-[350px] rounded-lg p-4 sm:p-8">
              <Image
                src={productImage}
                alt="product image"
                width={200}
                height={200}
              />
            </div>
          </div>
        </TabsContent>

        {/* Tab content for "Additional Information" */}
        <TabsContent value="additional">
          <div className="prose max-w-none flex flex-col gap-6">
            <h2 className="text-lg sm:text-2xl font-bold">{productName}</h2>
            <p>New/Old: {isNew ? "New" : "Old"}</p>
            <p>Tags: {tags}</p>
            <p>
              Price:
              <span className="text-black font-bold"> Rs. {productPrice}</span>
            </p>
            <p>
              Discount:{" "}
              <span className="text-black font-bold">
                {discountPercentage}%
              </span>
            </p>
            <p className="text-gray-600">{productDescription}</p>
          </div>
        </TabsContent>

        {/* Tab content for "Reviews" */}
        <TabsContent value="reviews">
          <div className="prose max-w-none flex flex-col gap-6">
            <PostCreator blog_id={id} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
