import Image from "next/image";

const Hero = () => {
    return (
      <section className="flex justify-between items-center px-16 py-12 bg-gray-50">
        <div>
          <h1 className="text-5xl font-bold mb-4">Find Clothes That Matches Your Style</h1>
          <p className="text-lg text-gray-700 mb-6">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className="bg-black text-white px-6 py-3 rounded-md">Shop Now</button>
        </div>
        <Image width={500} height={500} src="/pic1.jpg" alt="Clothing Style" className="w-1/2" />
      </section>
    );
  };
  
  export default Hero;