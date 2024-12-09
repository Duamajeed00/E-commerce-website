
import Image from 'next/image';

// Example of Products array
const Products = [
  {
    id: 1,
    name: 'VERTICAL STRIPED SHIRT',
    price: 120,
    rating: 4.5,
    image: '/Frame 32 (1).png',
  },
  {
    id: 2,
    name: 'COURAGE GRAPHIC T-SHIRT',
    price: 240,
    originalPrice: 260,
    rating: 3.5,
    discount: 20,
    image: '/Frame 33 (1).png',
  },
  {
    id: 3,
    name: 'LOOSE FIT BERMUDA SHORTS',
    price: 180,
    rating: 4.5,
    image: '/Frame 34 (1).png',
  },
  {
    id: 4,
    name: 'LOOSE FIT BERMUDA SHORTS',
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    discount: 30,
    image: '/Frame 38 (2).png',
  },
];

export default function NewArrivals() {
  return (
    <section className="py-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-24">
        {Products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="relative w-full h-64 sm:h-56">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h3 className="text-lg font-medium mt-4">{product.name}</h3>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="ml-1">{product.rating} / 5</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-black text-white rounded-full">
          View All
        </button>
      </div>
    </section>
  );
}
