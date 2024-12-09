
import Image from 'next/image';

const Products = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    price: 120,
    rating: 4.5,
    image: '/Frame 32.png',
    discount: null,
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    rating: 3.5,
    discount: 20,
    image: '/Frame 33.png',
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    price: 180,
    rating: 4.5,
    image: '/Frame 34.png',
    discount: null,
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    discount: 30,
    image: '/Frame 38.png',
  },
];

const ProductGrid = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">${product.price}</p>
            {product.originalPrice && (
              <p className="text-gray-400 line-through">${product.originalPrice}</p>
            )}
            <div className="flex items-center justify-between mt-2">
              <span className="text-yellow-500">{'⭐'.repeat(Math.round(product.rating))}</span>
              {product.discount && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">{product.discount}% Off</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;

