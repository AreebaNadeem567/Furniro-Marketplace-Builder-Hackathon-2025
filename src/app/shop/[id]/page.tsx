"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Button } from "@/app/components/ui/button";
import Relatedproducts from "@/app/components/Relatedproducts";
import ProductDetailsComponent from "@/app/components/Productdetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartItem extends ProductDetails {
  quantity: number;
  totalPrice: number;
}

interface ProductDetails {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: string;
  images: string[];
  discountPercentage: number;
  isNew: boolean;
  tags: string[];
  rating: number;
}

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isFavorite, setIsFavorite] = useState(() => {
    const savedFavorite = localStorage.getItem("favorite");
    return savedFavorite === "true";
  });
  const searchParams = useSearchParams();

  useEffect(() => {
    const productData = {
      _id: searchParams.get("id") || "",
      title: searchParams.get("productName") || "",
      description: searchParams.get("productDescription") || "",
      price: Number(searchParams.get("productPrice")) || 0,
      productImage: searchParams.get("productImage") || "/placeholder.svg",
      discountPercentage: Number(searchParams.get("productDiscountPercentage")) || 0,
      isNew: searchParams.get("isNew") === "true",
      tags: searchParams.get("tags")?.split(",") || [],
      rating: Number(searchParams.get("rating")) || 0,
      images: Array(4).fill(searchParams.get("productImage") || "/placeholder.svg"),
    };
    setProduct(productData);
  }, [searchParams]);

  useEffect(() => {
    localStorage.setItem("favorite", String(isFavorite));
  }, [isFavorite]);

  const handleAddToCart = () => {
    if (product) {
      const totalPrice = product.price * quantity * (1 - product.discountPercentage / 100);
      const cartItem: CartItem = { ...product, quantity, totalPrice };
      const existingCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = [...existingCart, cartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Added to Cart Successfully!", { autoClose: 3000 });
    }
  };

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
    if (!isFavorite) {
      toast.success("Added to Wishlist Successfully!", { autoClose: 3000 });
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-4 rounded-lg shadow-lg">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-16 h-16 overflow-hidden rounded-lg border-2 ${selectedImage === index ? "border-primary" : "border-transparent"}`}
                >
                  <Image src={image} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image src={product.images[selectedImage]} alt={product.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-blue-600">{product.title}</h1>
          <div className="text-2xl font-bold text-purple-600">Rs. {product.price}</div>
          <div className="text-gray-700 text-sm space-y-2">
            {product.description.split(/\.|\n/).slice(0, 5).map((sentence, index) => (
              sentence.trim() && <p key={index}>{sentence.trim()}.</p>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-3 py-1 text-lg text-blue-600">-</button>
              <span className="px-4 py-1 text-lg">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-lg text-blue-600">+</button>
            </div>
            <Button className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg" onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </Button>
              <button onClick={handleFavorite} className={`p-2 ${isFavorite ? "text-red-500" : "text-gray-400"}`}>
                <Heart className="w-6 h-6" />
              </button>
              {/* <Link href="/Wishslist">
           <button onClick={handleFavorite} className={`p-2 ${isFavorite ? "text-red-500" : "text-gray-400"}`}>
              <Heart className="w-6 h-6" />
             </button>
             </Link> */}
          </div>

          <div className="pt-6 border-t">
            <div className="text-sm">Share:</div>
            <div className="flex gap-6 mt-2">
              <Link href="https://www.facebook.com" className="p-2 text-blue-600"><FaFacebookSquare className="w-8 h-8" /></Link>
              <Link href="https://www.instagram.com" className="p-2 text-pink-700"><FaInstagramSquare className="w-8 h-8" /></Link>
              <Link href="https://www.linkedin.com" className="p-2 text-blue-700"><FaLinkedin className="w-8 h-8" /></Link>
            </div>
          </div>
        </div>
      </div>
      <ProductDetailsComponent
        id={Number(product._id)}
        tags={product.tags.join(", ")}
        isNew={product.isNew}
        productName={product.title}
        productPrice={product.price}
        productDescription={product.description}
        productImage={product.productImage}
        discountPercentage={product.discountPercentage}
      />
      <Relatedproducts />
      <ToastContainer />
    </div>
  );
}
