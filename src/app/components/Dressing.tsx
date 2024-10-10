import Image from 'next/image';

const BrowseByDressStyle = () => {
  const categories = [
    { imageSrc: '/Frame 61.png', label: 'Casual' },
    { imageSrc: '/Frame 62.png', label: 'Formal' },
    { imageSrc: '/Frame 64.png', label: 'Party' },
    { imageSrc: '/Frame 63.png', label: 'Gym' },
  ];

  return (
    <section className="my-8">
      <h1 className="text-2xl font-bold text-center">Browse By Dress Style</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <Image src={category.imageSrc} alt={category.label} width={200} height={200} className="rounded-lg" />
            <h2 className="text-lg font-bold text-center mt-4">{category.label}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseByDressStyle;