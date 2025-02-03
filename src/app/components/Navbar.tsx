// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import CartMenu from "./CartMenu";
// import { Heart, User } from "lucide-react";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

//   // Toggle Cart Menu and Close Mobile Menu
//   const toggleCartMenu = () => {
//     setIsCartMenuOpen((prev) => !prev);
//     setIsMenuOpen(false);
//   };

//   // Toggle Mobile Menu and Close Cart Menu
//   const toggleMobileMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//     setIsCartMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="bg-white shadow-md font-poppins relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             {/* Logo */}
//             <div className="flex items-center">
//               <Link href="/" className="flex-shrink-0">
//                 <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
//               </Link>
//             </div>

//             {/* Desktop Navigation Links */}
//             <div className="hidden md:flex md:items-center space-x-8">
//               <Link href="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
//                 Home
//               </Link>
//               <Link href="/shop" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
//                 Shop
//               </Link>
//               <Link href="/blog" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
//                 Blog
//               </Link>
//               <Link href="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
//                 Contact
//               </Link>
//             </div>

//             {/* Icons Section */}
//             <div className="hidden md:flex md:items-center space-x-6">
//               {/* Favorites Icon */}
//               <Link href="#" className="text-gray-800 hover:text-gray-600">
//                 <Heart className="w-5 h-5" />
//               </Link>

//               {/* Cart Icon */}
//               <button className="text-gray-800 hover:text-gray-600 relative" onClick={toggleCartMenu}>
//                 <Image src="/images/cart-icon.png" alt="Cart" width={22} height={22} quality={100} />
//               </button>

//               {/* User Icon for SignIn & SignOut */}
//               <SignedOut>
//                 <SignInButton>
//                   <button className="text-gray-800 hover:text-gray-600">
//                     <User className="w-5 h-5" />
//                   </button>
//                 </SignInButton>
//               </SignedOut>

//               <SignedIn>
//                 <UserButton afterSignOutUrl="/" />
//               </SignedIn>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex items-center">
//               <button onClick={toggleMobileMenu} className="p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none">
//                 {isMenuOpen ? (
//                   <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 ) : (
//                   <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-md z-50 p-4">
//           {/* Close Button */}
//           <div className="flex justify-end">
//             <button onClick={toggleMobileMenu} className="text-gray-800">
//               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Navigation Links */}
//           <div className="flex flex-col items-start space-y-4 mt-4">
//             <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
//             <Link href="/shop" className="text-gray-800 hover:text-gray-600">Shop</Link>
//             <Link href="/blog" className="text-gray-800 hover:text-gray-600">Blog</Link>
//             <Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>

//             {/* Mobile Favorites Icon */}
//             <Link href="#" className="text-gray-800 hover:text-gray-600 flex items-center">
//               <Heart className="w-5 h-5 mr-2" />
//             </Link>

//             {/* Mobile Cart Icon */}
//             <button className="text-gray-800 hover:text-gray-600 flex items-center" onClick={toggleCartMenu}>
//               <Image src="/images/cart-icon.png" alt="Cart" width={22} height={22} quality={100} className="mr-2" />
//             </button>

//             {/* Mobile User Icon */}
//             <SignedOut>
//               <SignInButton>
//                 <button className="text-gray-800 hover:text-gray-600 flex items-center">
//                   <User className="w-5 h-5 mr-2" />
//                 </button>
//               </SignInButton>
//             </SignedOut>

//             <SignedIn>
//               <UserButton afterSignOutUrl="/" />
//             </SignedIn>
//           </div>
//         </div>
//       )}

//       {/* Cart Menu */}
//       {isCartMenuOpen && (
//         <div className="absolute top-0 right-0 z-50">
//           <CartMenu onClose={() => setIsCartMenuOpen(false)} />
//         </div>
//       )}
//     </>
//   );
// }















"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartMenu from "./CartMenu";
import { Heart, User } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  // Toggle Cart Menu and Close Mobile Menu
  const toggleCartMenu = () => {
    setIsCartMenuOpen((prev) => !prev);
    setIsMenuOpen(false);
  };

  // Toggle Mobile Menu and Close Cart Menu
  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsCartMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md font-poppins relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center space-x-8">
              <Link href="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
                Home
              </Link>
              <Link href="/shop" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
                Shop
              </Link>
              <Link href="/blog" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
                Contact
              </Link>
            </div>

            {/* Icons Section (Visible on Both Desktop and Mobile) */}
            <div className="flex items-center space-x-6">
              {/* Favorites Icon */}
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                <Heart className="w-5 h-5" />
              </Link>
              {/* Cart Icon */}
              <button className="text-gray-800 hover:text-gray-600 relative" onClick={toggleCartMenu}>
                <Image src="/images/cart-icon.png" alt="Cart" width={22} height={22} quality={100} />
              </button>

              {/* User Icon for SignIn & SignOut */}
              <SignedOut>
                <SignInButton>
                  <button className="text-gray-800 hover:text-gray-600">
                    <User className="w-5 h-5" />
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none">
                {isMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-md z-50 p-4">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={toggleMobileMenu} className="text-gray-800">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-start space-y-4 mt-4">
            <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link href="/shop" className="text-gray-800 hover:text-gray-600">Shop</Link>
            <Link href="/blog" className="text-gray-800 hover:text-gray-600">Blog</Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
          </div>
        </div>
      )}

      {/* Cart Menu */}
      {isCartMenuOpen && (
        <div className="absolute top-0 right-0 z-50">
          <CartMenu onClose={() => setIsCartMenuOpen(false)} />
        </div>
      )}
    </>
  );
}








// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import CartMenu from "./CartMenu";
// import { Heart, User } from "lucide-react";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// export default function Navbar() {
//   const [wishlistCount, setWishlistCount] = useState(0);

//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
//     setWishlistCount(storedWishlist.length);
//   }, []);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

//   // Toggle Cart Menu and Close Mobile Menu
//   const toggleCartMenu = () => {
//     setIsCartMenuOpen((prev) => !prev);
//     setIsMenuOpen(false);
//   };

//   // Toggle Mobile Menu and Close Cart Menu
//   const toggleMobileMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//     setIsCartMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="bg-white shadow-md font-poppins relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             {/* Logo */}
//             <div className="flex items-center">
//               <Link href="/" className="flex-shrink-0">
//                 <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
//               </Link>
//             </div>

//             {/* Desktop Navigation Links */}
//             <div className="hidden md:flex md:items-center space-x-8">
//               <Link href="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
//                 Home
//               </Link>
//               <Link href="/shop" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
//                 Shop
//               </Link>
//               <Link href="/blog" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
//                 Blog
//               </Link>
//               <Link href="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold">
//                 Contact
//               </Link>
//             </div>

//             {/* Icons Section (Visible on Both Desktop and Mobile) */}
//             <div className="flex items-center space-x-6">
//               {/* Favorites Icon */}
//               {/* <Link href="#" className="text-gray-800 hover:text-gray-600">
//                 <Heart className="w-5 h-5" />
//               </Link> */}
//               <Link href="/Wishslist" className="relative">
//         <Heart className="w-6 h-6 text-red-500 cursor-pointer" />
//         {wishlistCount > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm px-2 rounded-full">
//             {wishlistCount}
//           </span>
//         )}
//       </Link>

//               {/* Cart Icon */}
//               <button className="text-gray-800 hover:text-gray-600 relative" onClick={toggleCartMenu}>
//                 <Image src="/images/cart-icon.png" alt="Cart" width={22} height={22} quality={100} />
//               </button>

//               {/* User Icon for SignIn & SignOut */}
//               <SignedOut>
//                 <SignInButton>
//                   <button className="text-gray-800 hover:text-gray-600">
//                     <User className="w-5 h-5" />
//                   </button>
//                 </SignInButton>
//               </SignedOut>

//               <SignedIn>
//                 <UserButton afterSignOutUrl="/" />
//               </SignedIn>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex items-center">
//               <button onClick={toggleMobileMenu} className="p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none">
//                 {isMenuOpen ? (
//                   <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 ) : (
//                   <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-md z-50 p-4">
//           {/* Close Button */}
//           <div className="flex justify-end">
//             <button onClick={toggleMobileMenu} className="text-gray-800">
//               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Navigation Links */}
//           <div className="flex flex-col items-start space-y-4 mt-4">
//             <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
//             <Link href="/shop" className="text-gray-800 hover:text-gray-600">Shop</Link>
//             <Link href="/blog" className="text-gray-800 hover:text-gray-600">Blog</Link>
//             <Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
//           </div>
//         </div>
//       )}

//       {/* Cart Menu */}
//       {isCartMenuOpen && (
//         <div className="absolute top-0 right-0 z-50">
//           <CartMenu onClose={() => setIsCartMenuOpen(false)} />
//         </div>
//       )}
//     </>
//   );
// }


















// "use client";
// import { useEffect, useState } from "react";
// import { Heart } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [wishlistCount, setWishlistCount] = useState(0);

//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
//     setWishlistCount(storedWishlist.length);
//   }, []);

//   return (
//     <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
//       <h1 className="text-xl font-bold">My Shop</h1>
//       <Link href="/wishlist" className="relative">
//         <Heart className="w-6 h-6 text-red-500 cursor-pointer" />
//         {wishlistCount > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm px-2 rounded-full">
//             {wishlistCount}
//           </span>
//         )}
//       </Link>
//     </nav>
//   );
// }
