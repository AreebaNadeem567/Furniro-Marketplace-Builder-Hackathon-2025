

'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import jsPDF from 'jspdf'

const features = [
  {
    icon: '/images/trophy.png',
    title: 'High Quality',
    description: 'crafted from top materials'
  },
  {
    icon: '/images/tick.png',
    title: 'Warranty Protection',
    description: 'Over 2 years'
  },
  {
    icon: '/images/gift.png',
    title: 'Free Shipping',
    description: 'Order over 150 $'
  },
  {
    icon: '/images/support.png',
    title: '24 / 7 Support',
    description: 'Dedicated support'
  }
]

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    address: '',
    city: '',
    province: 'Western Province',
    zip: '',
    phone: '',
    email: '',
    additionalInfo: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleDownload = () => {
    const doc = new jsPDF()
    doc.text('Shipment Information', 10, 10)
    Object.entries(formData).forEach(([key, value], index) => {
      doc.text(`${key}: ${value}`, 10, 20 + index * 10)
    })
    doc.save('shipment-info.pdf')
  }

  return (
    <>
      <div className="relative h-[300px] w-full mb-10 overflow-hidden">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-0"
          />
          <h1 className="text-4xl font-semibold mb-4">Checkout</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Checkout</span>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 py-8 font-poppins">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Billing Details Form */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium mb-8">Billing details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Company Name (Optional)</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Country / Region</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  >
                    <option>Sri Lanka</option>
                    <option>Pakistan</option>
                    <option>Bangladesh</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Town / City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Province</label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  >
                    <option>Western Province</option>
                    <option>Easter Province</option>
                    <option>Southern Province</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm">ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Additional Information"
                    className="w-full p-3 border rounded-lg resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800"
                >
                  Submit
                </button>
              </div>

              {/* Order Summary */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-base lg:text-2xl font-poppinsSemiBold">Product</span>
                    <span className="text-base lg:text-2xl font-poppinsSemiBold">Subtotal</span>
                  </div>
                  <div className="flex justify-between items-center py-4 text-sm md:text-base">
                    <div className="space-y-1">
                      <p>
                        <span className="text-lightGray">Asgaard Sofa </span> x 1
                      </p>
                    </div>
                    <span>Rs. 250,000.00</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span>Subtotal</span>
                    <span>Rs. 250,000.00</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span className="text-brown lg:text-xl font-poppinsSemiBold">Rs. 250,000.00</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="bank-transfer" name="payment" defaultChecked />
                    <label htmlFor="bank-transfer" className="text-sm">Direct Bank Transfer</label>
                  </div>
                  <p className="text-sm text-gray-500 ml-6">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="cash" name="payment" />
                    <label htmlFor="cash" className="text-sm">Cash On Delivery</label>
                  </div>
                </div>
                <p className="text-sm">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                  <Link href="/privacy-policy" className="text-black underline">
                    privacy policy
                  </Link>.
                </p>
               <Link href="/payment">
                 <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800">
                  Place order
                 </button>
              </Link>
              </div>
            </div>
          </form>
        ) : (
          // Shipment Information display after submission
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Shipment Information</h2>
            <div className="space-y-4">
              {Object.entries(formData).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}: </strong>
                  {value}
                </p>
              ))}
            </div>
            <button
              onClick={handleDownload}
              className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800"
            >
              Download PDF
            </button>
          </div>
        )}
      </div>
    </>
  )
}




