// import Image from "next/image";

// const Hero = () => {
//     return (
//       <section className="flex justify-between items-center px-16 py-12 bg-gray-50">
//         <div>
//           <h1 className="text-5xl font-bold mb-4">Find Clothes That Matches Your Style</h1>
//           <p className="text-lg text-gray-700 mb-6">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
//           <button className="bg-black text-white px-6 py-3 rounded-md">Shop Now</button>
//         </div>
//         <Image width={500} height={500} src="/pic1.jpg" alt="Clothing Style" className="w-1/2" />
//       </section>
//     );
//   };
  
//   export default Hero;

import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-8 lg:px-16 py-12 bg-gray-50">
      <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Find Clothes That Match Your Style
        </h1>
        <p className="text-md lg:text-lg text-gray-700 mb-6">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md">Shop Now</button>
      </div>
      <div className="flex justify-center lg:w-1/2">
        <Image
          width={500}
          height={500}
          src="/pic1.jpg"
          alt="Clothing Style"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>
    </section>
  );
};

export default Hero;
