

import Image from 'next/image';

// Product data
export const ProductCard = [
  {
    id: 1,
    name: 'VERTICAL STRIPED SHIRT',
    price: 120,
    rating: 4.5,
    image: '/Frame 32 (1).png',
    discount: null,
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
    discount: null,
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

// ProductList Component
export default function ProductList() {
  return (
    <section className="py-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">OUR PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-24">
        {ProductCard.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="relative w-full h-56 sm:h-64">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-medium mt-4 text-center">{product.name}</h3>
            <div className="flex items-center justify-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-sm">{product.rating} / 5</span>
            </div>
            <div className="flex justify-center items-center mt-2">
              <span className="text-xl font-bold">${product.price}</span>
              {product.discount && (
                <span className="text-sm text-red-500 ml-2">
                  -{product.discount}%
                </span>
              )}
            </div>
            {product.originalPrice && (
              <p className="text-center text-gray-500 line-through">
                ${product.originalPrice}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

