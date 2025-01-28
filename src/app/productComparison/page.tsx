//src\app\productComparison\page.tsx

import React from "react";
export const dynamic = "force-dynamic";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import PcSectionTwo from "../components/PcSectionsTwo";
import Shopbottombar from "../components/Shpbottombar";

export default async function ProductComparisonContent({
  searchParams,
}: {
  searchParams: Promise<{
    productName: string;
    productPrice: string;
    productImage: string;
    productDescription: string;
  }>;
}) {
  const { productName, productPrice, productImage, productDescription } =
    await searchParams;

  interface BoxContent {
    boxTitle: string;
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string;
    field6: string;
    field7: string;
    field8: string;
    field9: string;
    field10: string;
    field11: string;
    field12: string;
    field13: string;
    field14: string;
    field15: string;
    field16: string;
    field17: string;
    field18: string;
  }

  const res: BoxContent[] = await client.fetch(`
  *[_type=='pC'][].box[].boxContent[]{
'boxTitle':boxTitle,
'field1':field1,
'field2':field2,
'field3':field3,
'field4':field4,
'field5':field5,
'field6':field6,
'field7':field7,
'field8':field8,
'field9':field9,
'field10':field10,
'field11':field11,
'field12':field12,
'field13':field13,
'field14':field14,
'field15':field15,
'field16':field16,
'field17':field17,
'field18':field18,
}
  `);

  return (
    <>
      <div className="bg-[url('/images/comparison-bg.png')] bg-cover bg-center py-16 mb-12">
        <div className="container text-center">
          <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png)] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4 font-poppins">
            Product Comparison
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home /
            </Link>
            <span>Comparison</span>
          </div>
        </div>
      </div>

      <section className="m-auto pb-[112px]">
        <PcSectionTwo
          productName={productName}
          productPrice={productPrice}
          productImage={productImage}
          productDescription={productDescription}
        />

        <div className="mt-[42px] px-[16px] sm:px-[50px]">
          {res.map((section: BoxContent, index: number) => (
            <div key={index} className="mt-[96px]">
              <h3 className="text-[18px] sm:text-2xl font-medium">
                {section.boxTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="w-full border-r border-gray-300">
                  <div className="font-medium mt-[28px] mb-[34px]">
                    {section.field1}
                  </div>
                  <div className="font-medium mb-[34px]">{section.field2}</div>
                  <div className="font-medium mb-[34px]">{section.field3}</div>
                  <div className="font-medium mb-[34px]">{section.field4}</div>
                  <div className="font-medium mb-[34px]">{section.field5}</div>
                  <div className="font-medium mb-[34px]">{section.field6}</div>
                </div>

                <div className="w-full border-r border-gray-300">
                  <div className="mb-[34px] mt-[28px]">{section.field7}</div>
                  <div className="mb-[34px]">{section.field8}</div>
                  <div className="mb-[34px]">{section.field9}</div>
                  <div className="mb-[34px]">{section.field10}</div>
                  <div className="mb-[34px]">{section.field11}</div>
                  <div className="mb-[34px]">{section.field12}</div>
                </div>
                <div className="w-full border-r border-gray-300">
                  <div className="mb-[34px] mt-[28px]">{section.field13}</div>
                  <div className="mb-[34px]">{section.field14}</div>
                  <div className="mb-[34px]">{section.field15}</div>
                  <div className="mb-[34px]">{section.field16}</div>
                  <div className="mb-[34px]">{section.field17}</div>
                  <div className="mb-[34px]">{section.field18}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <Shopbottombar /> */}
      </section>
    </>
  );
}
