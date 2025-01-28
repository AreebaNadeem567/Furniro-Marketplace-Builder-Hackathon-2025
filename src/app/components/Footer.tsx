// import Link from 'next/link'

// export default function Footer() {
//   return (
//     <footer className="w-full py-12 px-4 font-poppins text-center md:text-start">
//       <div className="max-w-[1440px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//           {/* Logo and Address */}
//           <div className="space-y-6">
//             <h2 className="text-[#000000] text-2xl font-bold">
//               Funiro.
//             </h2>
//             <div className="text-[#9F9F9F] text-base leading-relaxed">
//               <p>400 University Drive Suite 200 Coral</p>
//               <p>Gables,</p>
//               <p>FL 33134 USA</p>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="space-y-6">
//             <h3 className="text-[#9F9F9F] text-base">Links</h3>
//             <nav className="flex flex-col space-y-4  font-poppinsSemiBold">
//               <Link href="/" className="text-black hover:text-[#B88E2F] transition-colors">
//                 Home
//               </Link>
//               <Link href="/shop" className="text-black hover:text-[#B88E2F] transition-colors">
//                 Shop
//               </Link>
//               <Link href="/about" className="text-black hover:text-[#B88E2F] transition-colors">
//                 About
//               </Link>
//               <Link href="/contact" className="text-black hover:text-[#B88E2F] transition-colors">
//                 Contact
//               </Link>
//             </nav>
//           </div>

//           {/* Help */}
//           <div className="space-y-6">
//             <h3 className="text-[#9F9F9F] text-base">Help</h3>
//             <nav className="flex flex-col space-y-4 font-poppinsSemiBold">
//               <Link href="/payment" className="text-black hover:text-[#B88E2F] transition-colors">
//                 Payment Options
//               </Link>
//               <Link href="/returns" className="text-black hover:text-[#B88E2F] transition-colors">
//                 Returns
//               </Link>
//               <Link href="/privacy" className="text-black hover:text-[#B88E2F] transition-colors">
//                 Privacy Policies
//               </Link>
//             </nav>
//           </div>

//           {/* Newsletter */}
//           <div className="space-y-6">
//             <h3 className="text-[#9F9F9F] text-base">Newsletter</h3>
//             <form className="flex flex-col lg:flex-row items-center gap-4 space-y-4">
//               <div className="border-b border-black">
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email Address"
//                   className="w-full py-2 bg-transparent text-black placeholder-[#9F9F9F] focus:outline-none"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="font-poppinsSemiBold border-b border-black text-black hover:text-[#B88E2F] transition-colors"
//               >
//                 SUBSCRIBE
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="pt-8 border-t border-[#D9D9D9]">
//           <p className="text-[#000000] text-base">
//             2023 furino. All rights reverved
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }





//src\components\footer\Footer.tsx

"use client";
import Link from "next/link";
import { useState } from "react";
import { toast, Toaster } from "sonner"; // Import toast functionality

export default function Footer() {


  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Subscribed successfully!");
    setEmail(""); // Clear the input field after subscribing
  };



  return (
    <footer className="w-full border-t border-black/[0.17] bg-white py-12 mt-[1px]">
      {/* Container for the footer */}
      <div className="container px-4 md:px-10 lg:px-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-8">
          
          {/* Company Info Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-poppins mb-4 md:mb-7">Funiro.</h2>
            <p className="text-gray-500 font-poppins">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-gray-500 font-poppins font-medium mb-4 md:mb-7">Links</h3>
            <nav className="flex flex-col space-y-4 md:space-y-6">
              <Link href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                Home
              </Link>
              <Link href="/shop" className="text-black font-poppins font-medium hover:text-gray-700">
                Shop
              </Link>
              <Link href="/blog" className="text-black font-poppins font-medium hover:text-gray-700">
                Blog
              </Link>
              <Link href="/contact" className="text-black font-poppins font-medium hover:text-gray-700">
                Contact
              </Link>
            </nav>
          </div>

          {/* Help Section */}
          <div className="space-y-4">
            <h3 className="text-gray-500 font-poppins font-medium mb-4 md:mb-7">Help</h3>
            <nav className="flex flex-col space-y-4 md:space-y-6">
              <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                Payment Options
              </a>
              <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                Returns
              </a>
              <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                Privacy Policies
              </a>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-gray-500 font-poppins font-medium mb-4 md:mb-7">Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Email Input Field */}
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
            onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter Your Email Address"
                  className="w-full border-b border-black pb-1 text-sm font-poppins text-gray-500 focus:outline-none"
                />
              </div>
              {/* Subscribe Button */}
              <button onClick={handleSubscribe} className="border-b border-black pb-1 text-sm font-poppins font-medium">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <Toaster richColors />
        </div>

        {/* Bottom Section (Copyright) */}
        <div className="border-t border-[#D9D9D9] pt-6 text-center">
          <p className="text-black font-poppins">2023 Funiro. All rights reserved</p>
        </div>
      </div>
      
    </footer>
  );
}
