import React, { useEffect, useState, useContext } from "react";
import api from "../api";
import { CartContext } from "../context/cartcontext";

export default function Navbar() {
  const [data, setData] = useState({ logo: {}, nav_items: [] });
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    api
      .get("navbar/")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  return (
    <header
      className="font-[Lato] bg-white text-gray-800 relative z-50"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      {/* 🔹 Top White Header */}
      <div className="border-b border-[#E25C26]">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 md:py-2.5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {data.logo?.image ? (
              <img
                src={data.logo.image}
                alt={data.logo.alt_text || "Logo"}
                className="w-20 sm:w-24 object-contain"
              />
            ) : (
              <div className="text-[#E25C26] font-semibold text-lg">
                Electric dreams
              </div>
            )}
          </div>

          {/* Call + Book Buttons */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button className="hidden md:inline-block bg-[#E25C26] text-white font-semibold rounded-full px-5 py-2 hover:bg-[#F65616] transition">
              Call (+91)1234567890
            </button>
            <button className="border border-[#E25C26] text-[#E25C26] font-semibold rounded-full px-5 py-2 hover:bg-orange-50 transition">
              Book Now
            </button>

            {/* Mobile menu icon */}
            <button
              className="md:hidden text-[#E25C26] text-2xl focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Orange Navigation Bar */}
      <nav
        className={`bg-[#E25C26] text-white transition-all duration-300 ease-in-out 
          ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"} 
          md:max-h-none md:opacity-100 md:overflow-visible`}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-start px-4 py-3 gap-4 md:gap-6">
          {/* Search Bar */}
          <div className="w-full md:w-80 lg:w-96 relative">
            <input
              type="text"
              placeholder="Search electricians"
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-gray-700 text-sm focus:ring-2 focus:ring-[#CD3A00] outline-none"
            />
            <span className="absolute left-4 top-2.5 text-gray-600 text-lg">🔍</span>
          </div>

          {/* Nav Links (All in one line) */}
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 md:gap-8 w-full md:w-auto">
            {data.nav_items?.map((item, index) => (
              <div key={item.title} className="relative group">
                <a
                  href={item.url || "#"}
                  className="text-sm md:text-base font-semibold relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full flex items-center"
                  onClick={(e) => {
                    if (item.children?.length > 0 && window.innerWidth < 768) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === index ? null : index);
                    }
                  }}
                >
                  {item.title}
                  {item.children?.length > 0 && (
                    <span className="ml-1 md:hidden">
                      {openDropdown === index ? "▲" : "▼"}
                    </span>
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.children?.length > 0 && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50 transform transition-all duration-200 origin-top hidden group-hover:block
                      ${openDropdown === index ? "block md:hidden" : ""}`}
                    style={{ animation: "fadeSlide 0.25s ease-out forwards" }}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.title}
                        href={child.url}
                        className="block px-4 py-2 text-sm hover:bg-orange-100 transition"
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Inline Cart (same style as other navlinks) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-sm md:text-base font-semibold hover:text-[#0056B3] transition"
            >
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-white text-[#E25C26] text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 Dropdown Animation */}
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
