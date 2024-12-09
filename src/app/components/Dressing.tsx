

import Image from 'next/image';

const BrowseByDressStyle = () => {
  const categories = [
    { imageSrc: '/Frame 61.png', label: 'Casual' },
    { imageSrc: '/Frame 62.png', label: 'Formal' },
    { imageSrc: '/Frame 64.png', label: 'Party' },
    { imageSrc: '/Frame 63.png', label: 'Gym' },
  ];

  return (
    <section className="my-8 px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl md:text-3xl font-bold text-center">Browse By Dress Style</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
            <Image 
              src={category.imageSrc} 
              alt={category.label} 
              width={200} 
              height={200} 
              className="rounded-lg w-full h-auto object-cover"
            />
            <h2 className="text-lg md:text-xl font-bold text-center mt-4">{category.label}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseByDressStyle;
