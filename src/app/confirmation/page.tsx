import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Confirmation() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Background Section */}
      <div className="relative h-[280px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/comparison-bg.png"
            alt="Comparison background"
            fill
            className="object-cover"
            priority
          />
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-0"
          />
          <h1 className="text-4xl font-semibold mb-4">Confirmation</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Confirmation</span>
          </div>
        </div>
      </div>

      {/* Title Section below Background */}
      <div className="text-center py-8 bg-white">
        <div className="flex flex-col items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Thank You For Your Order!
          </h1>
        </div>
      </div>

      {/* Information Section (below the title section) */}
      <div className="bg-white py-8 px-4 md:px-8 text-center">
        {/* Order Details */}
        <div className="text-gray-800 mb-6">
          <p className="text-lg mb-4">
            Your order has been successfully placed. We will contact you soon to
            confirm the details.
          </p>
          <div className="flex justify-center text-sm">
            <span className="text-gray-500">Order ID: </span>
            <span className="font-medium">#123456789</span>
          </div>
          <div className="flex justify-center text-sm">
            <span className="text-gray-500">Estimated Delivery: </span>
            <span className="font-medium">3-5 Business Days</span>
          </div>
        </div>
      </div>

      {/* Customer Support Section */}
      <div className="bg-gray-100 py-8 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Need Help?
        </h2>
        <p className="text-lg mb-4">
          If you have any questions, our customer support team is here to assist
          you.
        </p>
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact Us
        </Link>
      </div>

      {/* Social Media Section with Icons */}
      <div className="bg-white py-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6 text-3xl">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook />
          </Link>
          <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 transition-colors"
              >
                <FaLinkedin className="w-8 h-8" />
              </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
}
