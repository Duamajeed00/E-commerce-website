import Image from 'next/image';
import { Products } from './Products';

export default function NewArrivals() {
  return (
    <section className="py-10">
      <h2 className="text-center text-3xl font-bold mb-6">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-24">
        {Products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full h-56">
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