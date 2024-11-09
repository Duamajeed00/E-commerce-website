// import Link from "next/link";

// const Navbar = () => {
//     return (
//       <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md">
//         <h1 className="text-2xl font-bold">SHOP.CO</h1>
//         <ul className="flex space-x-6">
//           <li><Link href="#" className="text-gray-600 hover:text-black">Shop</Link></li>
//           <li><Link href="#" className="text-gray-600 hover:text-black">On Sale</Link></li>
//           <li><Link href="/NewArrivals" className="text-gray-600 hover:text-black">New Arrivals</Link></li>
//           <li><Link href="#" className="text-gray-600 hover:text-black">Brands</Link></li>
//         </ul>
//         <input type="search" placeholder="Search for products" className="border border-gray-300 rounded-md px-4 py-2" />
//       </nav>
//     );
//   };
  
//   export default Navbar;
"use client"
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">SHOP.CO</h1>
      
      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-black">
          <FaBars size={24} />
        </button>
      </div>

      {/* Links */}
      <ul className={`lg:flex lg:space-x-6 ${isOpen ? "block" : "hidden"} lg:block`}>
        <li><Link href="/Shop" className="text-gray-600 hover:text-black block lg:inline">Shop</Link></li>
        <li><Link href="/On Sale" className="text-gray-600 hover:text-black block lg:inline">On Sale</Link></li>
        <li><Link href="/NewArrivals" className="text-gray-600 hover:text-black block lg:inline">New Arrivals</Link></li>
        <li><Link href="/Brands" className="text-gray-600 hover:text-black block lg:inline">Brands</Link></li>
      </ul>
      
      {/* Search Input */}
      <div className="hidden lg:block">
        <input
          type="search"
          placeholder="Search for products"
          className="border border-gray-300 rounded-md px-4 py-2 w-full lg:w-auto"
        />
      </div>
    </nav>
  );
};

export default Navbar;
