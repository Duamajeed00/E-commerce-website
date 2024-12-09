
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-[#F2F0F1]">
      {/* Background Image */}
      <div>
        <Image src="/hero1.jpg" layout="fill" objectFit="cover" alt="hero" />
      </div>

      {/* Stars */}
      <div className="absolute top-56 mr-52 right-96">
        <Image src="/Vector (1).png" alt="small star" height={56} width={56} />
      </div>
      <div className="absolute top-20 right-10">
        <Image src="/Vector.png" alt="large star" height={104} width={104} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-12 flex flex-col items-start justify-center h-full">
        <h1 className="text-6xl font-extrabold leading-tight text-black drop-shadow-2xl tracking-wide">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="mt-6 text-lg text-gray-600 drop-shadow-md leading-relaxed max-w-2xl">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="mt-8 px-14 py-4 bg-black text-white font-semibold rounded-full shadow-xl transform hover:scale-110 hover:bg-gray-800 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-400">
          Shop Now
        </button>
      </div>
      <div className="bg-black w-full h-[122px] mb-10 pt-12 px-10">
        <div className="flex justify-between items-center">
        <Image src="/brand1.jpg" alt="brand" height={33} width={166} />
        <Image src="/brand2.jpg" alt="brand" height={38} width={91} />
        <Image src="/brand3.jpg" alt="brand" height={36} width={156} />
        <Image src="/brand4.jpg" alt="brand" height={32} width={194} />
        <Image src="/brand5.jpg" alt="brand" height={33} width={206} />
        </div>
      </div>
    </div>
  );
};

export default Hero;


