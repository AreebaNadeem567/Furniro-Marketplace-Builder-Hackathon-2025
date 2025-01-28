'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CategoryCard {
  title: string
  image: string
  href: string
}

const categories: CategoryCard[] = [
  {
    title: 'Dining',
    image: '/images/dining.png',
    href: '/'
  },
  {
    title: 'Living',
    image: '/images/living.png',
    href: '/'
  },
  {
    title: 'Bedroom',
    image: '/images/bedroom.png',
    href: '/'
  }
]

export default function Browse() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current
    if (container) {
      const scrollAmount = container.offsetWidth
      const newPosition = direction === 'left'
        ? Math.max(scrollPosition - scrollAmount, 0)
        : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.offsetWidth)
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
      setScrollPosition(newPosition)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const handleScroll = () => {
        setScrollPosition(container.scrollLeft)
      }
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 px-4 font-poppins">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Browse The Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={containerRef}
            className="overflow-x-auto md:overflow-x-visible scrollbar-hide"
          >
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 font-poppinsSemiBold">
              {categories.map((category) => (
                <Link 
                  key={category.title}
                  href={category.href}
                  className="group flex-shrink-0 w-full md:w-auto"
                >
                  <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={category.image}
                        alt={`${category.title} furniture category`}
                        height={500}
                        width={500}
                        quality={100}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-xl md:text-2xl text-gray-900 font-medium">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md md:hidden"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md md:hidden"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}














// //src\components\browserange\Browserange.tsx
// import React from 'react';
// import Image from 'next/image';

// import { client } from '@/sanity/lib/client';


// async function  Browserange() {

//   interface Icard {
//     cardHeading: string
//     cardImage: string
//   }
  
//   const res: Icard[] = await client.fetch(`*[_type=='landingPage'][0].sections[2].card[]{
//    'cardHeading':cardHeading,
//   'cardImage':cardImage.asset->url
// }`)

  
  

//   return (
//     <section className="px-4  mx-auto mb-20 font-poppins  w-[1183px] exsm:w-[80%] ">
      
//       {/* Top Heading Section */}
//       <div className="flex flex-col items-center text-center w-full ">
//         <h1 className="text-2xl  leading-[36px]  font-bold text-black">
//           Browse The Range
//         </h1>
//         <p className="text-16 leading-[24px]  text-black mt-2">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         </p>
//       </div>

//       {/* Card Body Section */}
//       <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5   exsm:pl-1  ">
//         {(res).map((item: Icard, index: number) => (
//           <div className="flex flex-col  items-center shadow-lg rounded-md overflow-hidden " key={index}>
            
//             {/* Top Image Container */}
//             <div className='transition-transform duration-300 hover:scale-105'>
//               <Image
//                 src={item.cardImage}
//                 alt="images"
//                 width={381}
//                 height={480}
//                 className="rounded-lg"
//               />
//             </div>

//             {/* Card Text Section */}
//             <div className="mt-4">
//               <h2 className=" text-4xl  
//               leading-[28px] 
//               font-semibold 
//               text-[24px]
//                text-black 
//                text-center">
//                 {item.cardHeading}
//               </h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Browserange;
