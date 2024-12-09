
"use client"
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineDown,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Announcement Bar */}
      <div className="bg-black p-3 flex justify-center items-center">
        <p className="text-white text-sm font-medium text-center">
          Sign up and get 20% off your first order.{" "}
          <span className="underline cursor-pointer hover:text-white transition duration-300">
            Sign Up Now
          </span>
        </p>
        <AiOutlineClose className="text-white absolute right-3 cursor-pointer hover:text-yellow-300 transition duration-300" />
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white text-black shadow-md flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <h1 className="font-extrabold text-2xl md:text-4xl text-black tracking-wide">
          SHOP.CO
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="cursor-pointer hover:text-indigo-600 transition duration-300 flex items-center">
            <Link href="/casual">
              Shop <AiOutlineDown className="ml-1" />
            </Link>
          </li>
          <li className="cursor-pointer hover:text-indigo-600 transition duration-300">
            <Link href="/casual">On Sale</Link>
          </li>
          <li className="cursor-pointer hover:text-indigo-600 transition duration-300">
            <Link href="/casual">New Arrivals</Link>
          </li>
          <li className="cursor-pointer hover:text-indigo-600 transition duration-300">
            <Link href="/casual">Brands</Link>
          </li>
        </ul>

        {/* Icons & Search */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-96">
            <input
              type="text"
              placeholder="Search for products"
              className="border border-gray-300 rounded-full px-4 py-2 pr-10 w-full focus:ring-2 focus:ring-gray-300 transition duration-300"
            />
            <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-indigo-600 transition duration-300" />
          </div>
          <Link href="/cart">
            <AiOutlineShoppingCart className="text-2xl cursor-pointer text-black hover:text-indigo-600 transition duration-300" />
          </Link>
          <Link href="/profile">
            <AiOutlineUser className="text-2xl cursor-pointer text-gray-700 hover:text-indigo-600 transition duration-300" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="flex items-center justify-between px-4">
            <AiOutlineSearch className="text-xl cursor-pointer hover:text-indigo-600 transition duration-300" />
            <Link href="/cart">
              <AiOutlineShoppingCart className="text-xl cursor-pointer hover:text-indigo-600 transition duration-300" />
            </Link>
            <Link href="/profile">
              <AiOutlineUser className="text-xl cursor-pointer hover:text-indigo-600 transition duration-300" />
            </Link>
          </div>
          <ul className="flex flex-col items-center mt-4 space-y-2">
            <li className="cursor-pointer hover:text-indigo-600 transition duration-300">
              <Link href="/casual">Shop</Link>
            </li>
            <li className="cursor-pointer hover:text-indigo-600 transition duration-300">
              <Link href="/casual">On Sale</Link>
            </li>
            <li className="cursor-pointer hover:text-indigo-600 transition duration-300">
              <Link href="/casual">New Arrivals</Link>
            </li>
            <li className="cursor-pointer hover:text-indigo-600 transition duration-300">
              <Link href="/casual">Brands</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

