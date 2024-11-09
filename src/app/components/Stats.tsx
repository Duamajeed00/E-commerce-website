// const Stats = () => {
//     return (
//       <section className="flex justify-center items-center space-x-10 py-8 bg-white">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold">200+</h2>
//           <p className="text-gray-600">International Brands</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-3xl font-bold">2,000+</h2>
//           <p className="text-gray-600">High-Quality Products</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-3xl font-bold">30,000+</h2>
//           <p className="text-gray-600">Happy Customers</p>
//         </div>
//       </section>
//     );
//   };
  
//   export default Stats;

const Stats = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-6 md:space-y-0 py-8 bg-white">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">200+</h2>
        <p className="text-gray-600">International Brands</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">2,000+</h2>
        <p className="text-gray-600">High-Quality Products</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">30,000+</h2>
        <p className="text-gray-600">Happy Customers</p>
      </div>
    </section>
  );
};

export default Stats;
