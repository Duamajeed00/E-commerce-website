
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading and Arrows */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black">OUR HAPPY CUSTOMERS</h2>
          {/* Arrows */}
          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 shadow">
              <FaArrowLeft className="text-xl text-gray-600" />
            </button>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 shadow">
              <FaArrowRight className="text-xl text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-80">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </span>
            </div>
            <p className="font-semibold text-lg">Sarah M.</p>
            <p className="text-gray-600 mt-2">
            I am blown away by the quality and style of the clothes I received
              from ShopCo  From casual wear to elegant dresses every piece I have
              bought has exceeded my expectations
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-80">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </span>
            </div>
            <p className="font-semibold text-lg">Alex K.</p>
            <p className="text-gray-600 mt-2">
              Finding clothes that align with my personal style used to be a
              challenge until I discovered ShopCo. The range of options they
              offer is truly remarkable catering to a variety of tastes and
              occasions
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-80">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </span>
            </div>
            <p className="font-semibold text-lg">James L.</p>
            <p className="text-gray-600 mt-2">
              As someone who s always on the lookout for unique fashion pieces
              I am thrilled to have stumbled upon ShopCo. The selection of
              clothes is not only diverse but also on-point with the latest
              trends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;