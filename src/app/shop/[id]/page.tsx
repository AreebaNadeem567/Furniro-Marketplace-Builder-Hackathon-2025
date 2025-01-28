// import React from "react";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Spmain from "@/app/components/Spmain";
// import Productdetails from "@/app/components/Productdetails";
// import Relatedproducts from "@/app/components/Relatedproducts";

// async function Singleproduct(props: {
//   searchParams: Promise<{
//     id: number;
//     productName: string;
//     productPrice: number;
//     productImage: string;
//     productDescription: string;
//     productdicountPercentage: number;
//     tags: string;
//     isNew: boolean;
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
//     isNew,
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
//         isNew={isNew}
//       />

//       {/* Product Details Section */}
//       <Productdetails
//         id={id}
//         tags={tags}
//         isNew={isNew}
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




















import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Spmain from "@/app/components/Spmain";
import Productdetails from "@/app/components/Productdetails";
import Relatedproducts from "@/app/components/Relatedproducts";
import { client } from "@/sanity/lib/client";
// import { client } from "@/lib/sanity"; // Adjust the import based on your project structure

// Define the Product interface
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
      *[_type == 'product'] {
        'productImage': productImage.asset->url,  // Fetching image URL
        description,
        dicountPercentage,
        tags,
        isNew,  // Fetching the 'isNew' field
        title,
        price,
        _id  // Ensures _id is included
      }
    `);

    return products.map((product: any) => ({
      ...product,
      _id: product._id, // Ensure the _id is included
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of error
  }
}

async function Singleproduct(props: {
  searchParams: Promise<{
    id: number;
    productName: string;
    productPrice: number;
    productImage: string;
    productDescription: string;
    productdicountPercentage: number;
    tags: string;
    isNew: boolean;  // The 'isNew' property will be passed here
  }>;
}) {
  const searchParams = await props.searchParams;
  const {
    id,
    productName,
    productPrice,
    productImage,
    productDescription,
    productdicountPercentage,
    tags,
    isNew,  // 'isNew' is included here
  } = searchParams;

  return (
    <>
      {/* Breadcrumb Navigation Section */}
      <div className="w-full flex items-center min-h-[80px] exsm:min-h-[90px] xsm:min-h-[100px] sm:min-h-[120px] bg-[#f9f1e7] px-2 exsm:px-4 xsm:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 box-border">
        {/* Breadcrumb Links */}
        <div className="w-full flex items-center flex-wrap text-sm exsm:text-base xsm:text-lg sm:text-xl md:text-2xl leading-[22px] exsm:leading-[24px] xsm:leading-[26px] sm:leading-[28px] md:leading-[30px]">
          {/* Home Link */}
          <Link href="/">
            <p className="text-[#7c7474] flex items-center">
              Home
              <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 exsm:w-5 exsm:h-5 xsm:w-6 xsm:h-6 sm:w-7 sm:h-7" />
            </p>
          </Link>

          {/* Shop Link */}
          <Link href="/shop">
            <p className="text-[#7c7474] ml-2 exsm:ml-3 xsm:ml-4 sm:ml-5 md:ml-6 flex items-center">
              Shop
              <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 exsm:w-5 exsm:h-5 xsm:w-6 xsm:h-6 sm:w-7 sm:h-7" />
            </p>
          </Link>

          {/* Product Name with Left Border */}
          <div className="ml-2 exsm:ml-3 xsm:ml-4 sm:ml-5 md:ml-6 pl-2 exsm:pl-3 xsm:pl-4 sm:pl-5 md:pl-6 border-l-2 border-black">
            <p className="font-medium text-sm exsm:text-base xsm:text-lg sm:text-xl md:text-2xl">
              {productName}
            </p>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <Spmain
        id={id}
        productName={productName}
        productPrice={productPrice}
        productImage={productImage}
        productDescription={productDescription}
        dicountPercentage={productdicountPercentage}
        tags={tags}
        isNew={isNew}  // Pass isNew as a prop to Spmain
      />

      {/* Product Details Section */}
      <Productdetails
        id={id}
        tags={tags}
        isNew={isNew}  // Pass isNew as a prop to Productdetails
        productName={productName}
        productPrice={productPrice}
        productDescription={productDescription}
        productImage={productImage}
        discountPercentage={productdicountPercentage}
      />

      {/* Related Products Section */}
      <Relatedproducts />
    </>
  );
}

export default Singleproduct;
