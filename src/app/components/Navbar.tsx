import Link from "next/link";

const Navbar = () => {
    return (
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">SHOP.CO</h1>
        <ul className="flex space-x-6">
          <li><Link href="#" className="text-gray-600 hover:text-black">Shop</Link></li>
          <li><Link href="#" className="text-gray-600 hover:text-black">On Sale</Link></li>
          <li><Link href="/NewArrivals" className="text-gray-600 hover:text-black">New Arrivals</Link></li>
          <li><Link href="#" className="text-gray-600 hover:text-black">Brands</Link></li>
        </ul>
        <input type="search" placeholder="Search for products" className="border border-gray-300 rounded-md px-4 py-2" />
      </nav>
    );
  };
  
  export default Navbar;