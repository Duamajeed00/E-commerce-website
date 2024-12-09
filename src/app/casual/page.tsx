import Image from 'next/image';

const products = [
  {
    image: '/pic13.png',
    name: 'Gradient Graphic T-shirt',
    price: 145,
    rating: '3.5/5',
  },
  {
    image: '/pic14.png',
    name: 'Polo with Tipping Details',
    price: 180,
    rating: '4.5/5',
  },
  {
    image: '/pic15.png',
    name: 'Black Striped T-shirt',
    price: 120,
    rating: '5.0/5',
    originalPrice: 150,
    discount: '-30%',
  },
  {
    image: '/Frame 38 (2).png',
    name: 'Skinny Fit Jeans',
    price: 240,
    rating: '3.5/5',
    originalPrice: 260,
    discount: '-20%',
  },
  {
    image: '/Frame 34.png',
    name: 'Checkered Shirt',
    price: 180,
    rating: '4.5/5',
  },
  {
    image: '/Frame 38.png',
    name: 'Sleeve Striped T-shirt',
    price: 130,
    rating: '4.5/5',
    originalPrice: 160,
    discount: '-30%',
  },
  {
    image: '/Frame 32 (1).png',
    name: 'Vertical Striped Shirt',
    price: 212,
    rating: '5.0/5',
    originalPrice: 232,
    discount: '-20%',
  },
  {
    image: '/Frame 33 (1).png',
    name: 'Courage Graphic T-shirt',
    price: 145,
    rating: '4.0/5',
  },
  {
    image: '/Frame 34 (1).png',
    name: 'Loose Fit Bermuda Shorts',
    price: 80,
    rating: '3.0/5',
  },
];

export default function Casual() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Casual</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-yellow-500 text-sm">{product.rating}</p>
                <div className="mt-2">
                  {product.originalPrice ? (
                    <div>
                      <span className="text-gray-500 line-through mr-2">
                        ${product.originalPrice}
                      </span>
                      <span className="text-red-500 font-bold">
                        ${product.price}
                      </span>
                    </div>
                  ) : (
                    <span className="text-black font-bold">
                      ${product.price}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <span className="text-green-500 text-sm">
                    {product.discount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}