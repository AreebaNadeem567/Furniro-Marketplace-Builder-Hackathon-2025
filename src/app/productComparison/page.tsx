
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Star, Trash2 } from "lucide-react";
import Image from "next/image";

const ProductComparisonContent = () => {
  // State to store cart items
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedItems);
  }, []);

  // Listen for changes in localStorage to update cartItems
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedItems = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(updatedItems);
    };

    // Event listener for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Function to remove an item from the comparison (only within the component state)
  const removeItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  return (
    <>
      <section className="bg-[url('/images/comparison-bg.png')] bg-cover bg-center py-12 md:py-16 mb-6">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-16 h-16 bg-[url('/images/logo-short.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Product Comparison</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Comparison</span>
          </div>
        </div>
      </section>

      <section className="m-auto pb-[112px]">
        <div className="mt-[42px] px-[16px] sm:px-[50px]">
          {cartItems.length > 0 ? (
            <div className="mt-[96px]">
              <h3 className="text-[18px] sm:text-2xl font-medium mb-6">Product Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full border border-gray-300 p-6 rounded-lg shadow-lg bg-white flex flex-col items-center"
                  >
                    <Image
                      src={item.productImage}
                      alt={item.title}
                      width={180}
                      height={180}
                      className="mb-4 rounded-md"
                    />
                    <h4 className="font-medium text-lg text-center mb-2">{item.title}</h4>
                    <p className="text-gray-600 mb-3">Price: <span className="text-black font-semibold">Rs. {item.price}</span></p>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <button 
                      onClick={() => removeItem(index)}
                      className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2 hover:bg-red-600"
                    >
                      <Trash2 className="w-4 h-4" /> Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">No products in comparison.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductComparisonContent;