

import Image from 'next/image';
import { ProductCard } from './ProductCard';

export default function TopSelling() {
  return (
    <section className="py-10">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">TOP SELLINGS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-24">
        {ProductCard.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-medium mt-4">{product.name}</h3>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="ml-1">{product.rating} / 5</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">${product.price}</span>
              {product.discount && (
                <span className="text-sm text-red-500 ml-2">
                  -{product.discount}%
                </span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
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
