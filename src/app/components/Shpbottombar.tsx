import React from "react";
import Image from "next/image";

function Shopbottombar() {
  return (
    <section className="w-full h-auto items-center justify-center bg-[#f9f1e7] py-8 md:py-0 overflow-hidden">
      {/* Main container */}
      <div className="w-full max-w-screen-xl flex flex-wrap gap-8 px-4 justify-center md:justify-between m-auto">
        {/* 1st Div - High Quality */}
        <div className="flex w-full md:w-[300px] gap-4 items-center">
          <Image
            src="/images/trophy.png"
            alt="trophy"
            width={60}
            height={60}
          />
          <div className="flex flex-col items-start">
            <h1 className="font-semibold text-[22px] sm:text-[25px] leading-[30px] sm:leading-[37.5px]">
              High Quality
            </h1>
            <p className="font-medium text-[18px] sm:text-[20px] text-[#898989] leading-[28px] sm:leading-[30px]">
              crafted from top materials
            </p>
          </div>
        </div>

        {/* 2nd Div - Warranty Protection */}
        <div className="flex w-full md:w-[300px] gap-4 items-center">
          <Image
            src="/images/guarantee.png"
            alt="guarantee"
            width={60}
            height={60}
          />
          <div className="flex flex-col items-start">
            <h1 className="font-semibold text-[22px] sm:text-[25px] leading-[30px] sm:leading-[37.5px]">
              Warranty Protection
            </h1>
            <p className="font-medium text-[18px] sm:text-[20px] text-[#898989] leading-[28px] sm:leading-[30px]">
              Over 2 years
            </p>
          </div>
        </div>

        {/* 3rd Div - Free Shipping */}
        <div className="flex w-full md:w-[300px] gap-4 items-center">
          <Image
            src="/images/gift.png"
            alt="shipping"
            width={60}
            height={60}
          />
          <div className="flex flex-col items-start">
            <h1 className="font-semibold text-[22px] sm:text-[25px] leading-[30px] sm:leading-[37.5px]">
              Free Shipping
            </h1>
            <p className="font-medium text-[18px] sm:text-[20px] text-[#898989] leading-[28px] sm:leading-[30px]">
              Order over $150
            </p>
          </div>
        </div>

        {/* 4th Div - 24/7 Support */}
        <div className="flex w-full md:w-[300px] gap-4 items-center">
          <Image
            src="/images/cust.png"
            alt="customer support"
            width={60}
            height={60}
          />
          <div className="flex flex-col items-start">
            <h1 className="font-semibold text-[22px] sm:text-[25px] leading-[30px] sm:leading-[37.5px]">
              24/7 Support
            </h1>
            <p className="font-medium text-[18px] sm:text-[20px] text-[#898989] leading-[28px] sm:leading-[30px]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shopbottombar;
