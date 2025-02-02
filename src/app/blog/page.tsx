"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";

export default function BlogPage() {
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = [
    {
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      image: "/images/pen-post.png",
    },
    {
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
      image: "/images/read-post.png",
    },
    {
      title: "Hand made pieces that took time to made",
      date: "03 Aug 2022",
      image: "/images/write-post.png",
    },
    {
      title: "Moder name in Milan",
      date: "03 Aug 2022",
      image: "/images/gamla-post.png",
    },
    {
      title: "Colorful office redesign design",
      date: "03 Aug 2022",
      image: "/images/beach-post.png",
    },
  ];

  const features = [
    {
      icon: "/images/trophy.png",
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      icon: "/images/tick.png",
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: "/images/gift.png",
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: "/images/support.png",
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isReadMoreSecond, setIsReadMoreSecond] = useState(false);

  const handleSearchChange = (e: { target: { value: any } }) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter categories based on the search query
    setFilteredCategories(
      categories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setFilteredCategories(categories);
  };

  const handleToggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleToggleReadMoreSecond = () => {
    setIsReadMoreSecond(!isReadMoreSecond);
  };

  return (
    <>
      <div className="relative h-[280px] w-full">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-0"
          />
          <h1 className="text-4xl font-semibold mb-4">Blog</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Blog</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 font-poppins">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          {/* Left side: Blog content */}
          <div>
            {/* First Blog Section */}
            <div className="space-y-6 mb-12">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/read-blog.png"
                  alt="Blog post featured image"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>

              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/admin-icon.png"
                    alt="Admin icon"
                    width={16}
                    height={16}
                  />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/date-icon.png"
                    alt="Date icon"
                    width={16}
                    height={16}
                  />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/tag-icon.png"
                    alt="Tag icon"
                    width={16}
                    height={16}
                  />
                  <span>Wood</span>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-medium">
                Going all-in with millennial design
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Millennial design is characterized by a blend of nostalgia,
                minimalism, and vibrant, youthful energy. It often incorporates
                pastel colors, clean lines, and playful typography, reflecting
                the era&apos;s digital and cultural influences. Elements like
                geometric patterns, bold gradients, and vintage-inspired
                aesthetics are also prominent. Sustainability and
                personalization are key, with a focus on eco-friendly materials
                and designs that cater to individual tastes. Overall, it&apos;s a
                style that merges functionality with a sense of fun and
                individual expression.
              </p>

              <button
                onClick={handleToggleReadMore}
                className="inline-block text-black underline underline-offset-4 hover:text-gray-600 mt-4"
              >
                {isReadMore ? "Read Less" : "Read More"}
              </button>

              {isReadMore && (
                <div className="mt-6">
                  <p className="text-gray-600 leading-relaxed">
                    This section provides additional details about the post,
                    such as insights into the creative process, challenges faced
                    during its creation, or an overview of the design
                    philosophy. The goal is to dive deeper into the story behind
                    the post and give readers more context about the work being
                    discussed.
                  </p>
                </div>
              )}
            </div>

            {/* Second Blog Section */}
            <div className="space-y-6">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/laptop-blog.png"
                  alt="Second blog post featured image"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/admin-icon.png"
                    alt="Admin icon"
                    width={16}
                    height={16}
                  />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/date-icon.png"
                    alt="Date icon"
                    width={16}
                    height={16}
                  />
                  <span>15 Nov 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/tag-icon.png"
                    alt="Tag icon"
                    width={16}
                    height={16}
                  />
                  <span>Design</span>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-medium">
                The evolution of modern interiors
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Modern interiors have undergone significant transformations over
                the decades. From sleek minimalism to warm, textured spaces, the
                focus has shifted towards creating environments that reflect
                personality and purpose. This evolution has been driven by
                advancements in technology, cultural shifts, and an increased
                emphasis on sustainability and well-being.
              </p>

              <button
                onClick={handleToggleReadMoreSecond}
                className="inline-block text-black underline underline-offset-4 hover:text-gray-600 mt-4"
              >
                {isReadMoreSecond ? "Read Less" : "Read More"}
              </button>

              {isReadMoreSecond && (
                <div className="mt-6">
                  <p className="text-gray-600 leading-relaxed">
                    The integration of smart technologies, eco-friendly
                    materials, and adaptive designs has redefined how we
                    approach interiors. Today’s modern spaces prioritize
                    comfort, functionality, and an aesthetic that aligns with
                    individual lifestyles, making every home a unique narrative
                    of its inhabitants.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right side: Search and Categories */}
          <div className="space-y-8">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search"
                className="w-full p-3 pr-12 border rounded-lg"
              />
              <Search className="absolute right-12 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                >
                  ×
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Categories</h2>
              <div className="space-y-3">
                {filteredCategories.map((category) => (
                  <div
                    key={category.name}
                    className="flex justify-between items-center"
                  >
                    <Link
                      href="#"
                      className="text-lightGray hover:text-gray-900"
                    >
                      {category.name}
                    </Link>
                    <span className="text-lightGray">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Recent Posts</h2>
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium line-clamp-2">
                        <Link href="#" className="hover:text-gray-600">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full font-poppins">
        <div className="w-full bg-[#FAF3EA] mx-auto px-4 py-16 my-6 pl-6 lg:pl-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 pl-8 md:pl-0"
              >
                <div className="mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={60}
                    quality={100}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#333333] text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#666666] text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
