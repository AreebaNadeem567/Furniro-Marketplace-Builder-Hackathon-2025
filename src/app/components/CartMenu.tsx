"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { X } from "lucide-react" 

interface CartItem {
  _id: string
  title: string
  price: number
  productImage: string
  quantity: number
}

interface CartMenuProps {
  onClose: () => void
}

export default function CartMenu({ onClose }: CartMenuProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(storedCart)

    const total = storedCart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0)
    setSubtotal(total)
  }, [])

  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cartItems]
    updatedCart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    setCartItems(updatedCart)

    // Recalculate subtotal
    const newSubtotal = updatedCart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0)
    setSubtotal(newSubtotal)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <div className="relative">
            <Image
              src="/images/close-cart.png"
              width={20}
              height={20}
              className="cursor-pointer"
              alt="Close cart"
              onClick={onClose}
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 max-h-60 overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={item.productImage || "/placeholder.svg"}
                  width={50}
                  height={50}
                  alt={item.title}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-medium">
                  Rs. {(item.price * item.quantity).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </p>
                {/* Improved Close Button with Red X Icon */}
                <Button onClick={() => handleRemoveItem(index)} className="bg-transparent border-none p-1">
                  <X size={18} className="text-red-700" />
                </Button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Subtotal */}
        {cartItems.length > 0 && (
          <div className="flex justify-between items-center py-4 border-t mt-4">
            <span className="font-medium">Subtotal</span>
            <span className="text-[#B88E2F] font-medium">
              Rs. {subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Link href="/cart">
            <button
              className="w-full text-sm py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={onClose}
            >
              Cart
            </button>
          </Link>
          <Link href="/checkout">
            <button
              className="w-full text-sm py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={onClose}
            >
              Checkout
            </button>
          </Link>
          <Link href="/productComparison">
            <button
              className="w-full text-sm py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={onClose}
            >
              Comparison
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}