// import Link from "next/dist/client/link"

// const Footer = () => {
//     return (
//       <footer className="bg-gray-100 pt-8 sm:pt-12">
//         <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
//           {/* Subscribe Section */}
//           <div className="w-full px-5 flex flex-col items-center">
//             <div className="w-full md:w-3/5 text-center">
//               <h3 className="text-2xl sm:text-3xl text-black font-extrabold mb-4">
//                 STAY UPTO DATE ABOUT OUR LATEST OFFERS
//               </h3>
//               <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   className="p-2 rounded-lg w-full sm:w-auto border border-gray-300"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-black text-white px-6 py-2 rounded-lg text-lg hover:bg-gray-700"
//                 >
//                   Subscribe to Newsletter
//                 </button>
//               </form>
//             </div>
//           </div>
  
//           {/* Footer Links */}
//           <div className="w-full mt-8">
//             <div className="flex flex-wrap justify-center text-center sm:text-left">
//               <div className="w-full sm:w-1/4 px-5 mb-6">
//                 <h4 className="text-xl font-bold text-black mb-4">SHOP.CO</h4>
//                 <p className="text-gray-600">
//                   We have clothes that suit your style and which you are proud to
//                   wear. From women to men.
//                 </p>
//                 <div className="flex justify-center sm:justify-start mt-4 space-x-4">
//                   <Link href="#" className="text-gray-500 hover:text-black">
//                     {/* Add social media icons here */}
//                     <i className="fab fa-facebook"></i>
//                   </Link>
//                   <Link href="#" className="text-gray-500 hover:text-black">
//                     <i className="fab fa-instagram"></i>
//                   </Link>
//                   <Link href="#" className="text-gray-500 hover:text-black">
//                     <i className="fab fa-pinterest"></i>
//                   </Link>
//                 </div>
//               </div>
  
//               {/* Company Links */}
//               <div className="w-full sm:w-1/4 px-5 mb-6">
//                 <h4 className="text-xl font-bold text-black mb-4">COMPANY</h4>
//                 <ul className="text-gray-600">
//                   <li className="mb-2 hover:text-black"><Link href="#">About</Link></li>
//                   <li className="mb-2 hover:text-black"><Link href="#">Features</Link></li>
//                   <li className="mb-2 hover:text-black"><Link href="#">Works</Link></li>
//                   <li className="hover:text-black"><Link href="#">Career</Link></li>
//                 </ul>
//               </div>
  
//               {/* Help Links */}
//               <div className="w-full sm:w-1/4 px-5 mb-6">
//                 <h4 className="text-xl font-bold text-black mb-4">HELP</h4>
//                 <ul className="text-gray-600">
//                   <li className="mb-2 hover:text-black"><Link href="#">Customer Support</Link></li>
//                   <li className="mb-2 hover:text-black"><Link href="#">Delivery Details</Link></li>
//                   <li className="mb-2 hover:text-black"><Link href="#">Terms & Conditions</Link></li>
//                   <li className="hover:text-black"><Link href="#">Privacy Policy</Link></li>
//                 </ul>
//               </div>
  
//               {/* FAQ Links */}
//               <div className="w-full sm:w-1/4 px-5 mb-6">
//                 <h4 className="text-xl font-bold text-black mb-4">FAQ</h4>
//                 <ul className="text-gray-600">
//                   <li className="mb-2 hover:text-black"><Link href="#">Account</Link></li>
//                   <li className="mb-2 hover:text-black"><Link href="#">Manage Deliveries</Link></li>
//                   <li className="mb-2 hover:text-black"><Link href="#">Orders</Link></li>
//                   <li className="hover:text-black"><Link href="#">Payments</Link></li>
//                 </ul>
//               </div>
  
//               {/* Resources Links */}
//               <div className="w-full sm:w-1/4 px-5 mb-6">
//                 <h4 className="text-xl font-bold text-black mb-4">RESOURCES</h4>
//                 <ul className="text-gray-600">
//                   <li className="mb-2 hover:text-black"><Link href="#">Free eBooks</Link></li>
//                   <li className="mb-2 hover:text-black"><Link href="#">Development Tutorial</Link></li>
//                   <li className="mb-2 hover:text-black"><Link href="#">How to - Blog</Link></li>
//                   <li className="hover:text-black"><Link href="#">YouTube Playlist</Link></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
  
//           {/* Payment Methods */}
//           <div className="w-full text-center mt-8">
//             <p className="text-gray-500 text-sm">
//               Shop.co © 2000-2023, All Rights Reserved
//             </p>
//             <div className="mt-4 flex justify-center space-x-4">
//               <img
//                 src="/Badge (1).png"
//                 alt="Visa"
//                 className="h-6"
//               />
//               <img
//                 src="/Badge.png"
//                 alt="PayPal"
//                 className="h-6"
//               />
//               <img
//                 src="/Badge (2).png"
//                 alt="Apple Pay"
//                 className="h-6"
//               />
//               <img
//                 src="/G Pay.png"
//                 alt="Stripe"
//                 className="h-6"
//               />
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-8 sm:pt-12">
      <div className="max-w-6xl mx-auto text-gray-800 flex flex-wrap justify-center px-4 md:px-8">
        {/* Subscribe Section */}
        <div className="w-full flex flex-col items-center mb-8">
          <div className="w-full md:w-3/5 text-center">
            <h3 className="text-2xl sm:text-3xl text-black font-extrabold mb-4">
              STAY UP-TO-DATE ABOUT OUR LATEST OFFERS
            </h3>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 rounded-lg w-full sm:w-auto border border-gray-300"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg text-lg hover:bg-gray-700"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="w-full">
          <div className="flex flex-wrap justify-center text-center sm:text-left">
            {/* SHOP.CO Section */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-5 mb-6">
              <h4 className="text-xl font-bold text-black mb-4">SHOP.CO</h4>
              <p className="text-gray-600">
                We have clothes that suit your style and which you are proud to wear. From women to men.
              </p>
              <div className="flex justify-center sm:justify-start mt-4 space-x-4">
                <Link href="#" className="text-gray-500 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-black">
                  <i className="fab fa-pinterest"></i>
                </Link>
              </div>
            </div>

            {/* Company Links */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-5 mb-6">
              <h4 className="text-xl font-bold text-black mb-4">COMPANY</h4>
              <ul className="text-gray-600">
                <li className="mb-2 hover:text-black"><Link href="#">About</Link></li>
                <li className="mb-2 hover:text-black"><Link href="#">Features</Link></li>
                <li className="mb-2 hover:text-black"><Link href="#">Works</Link></li>
                <li className="hover:text-black"><Link href="#">Career</Link></li>
              </ul>
            </div>

            {/* Additional Links (Help, FAQ, Resources) */}
            {["HELP", "FAQ", "RESOURCES"].map((title, idx) => (
              <div key={idx} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-5 mb-6">
                <h4 className="text-xl font-bold text-black mb-4">{title}</h4>
                <ul className="text-gray-600">
                  <li className="mb-2 hover:text-black"><Link href="#">Customer Support</Link></li>
                  <li className="mb-2 hover:text-black"><Link href="#">Delivery Details</Link></li>
                  <li className="mb-2 hover:text-black"><Link href="#">Terms & Conditions</Link></li>
                  <li className="hover:text-black"><Link href="#">Privacy Policy</Link></li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="w-full text-center mt-8">
          <p className="text-gray-500 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <img src="/Badge (1).png" alt="Visa" className="h-6" />
            <img src="/Badge.png" alt="PayPal" className="h-6" />
            <img src="/Badge (2).png" alt="Apple Pay" className="h-6" />
            <img src="/G Pay.png" alt="Stripe" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
