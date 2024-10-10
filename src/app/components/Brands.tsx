import Image from 'next/image';

const Brands = () => {
  return (
    <section className="flex justify-around items-center py-8 bg-black">
      <Image src="/Group (1).png" alt="Versace" width={100} height={50} />
      <Image src="/zara-logo-1 1.png" alt="Zara" width={100} height={50} />
      <Image src="/gucci-logo-1 1.png" alt="Gucci" width={100} height={50} />
      <Image src="/prada-logo-1 1.png" alt="Prada" width={100} height={50} />
      <Image src="/Group.png" alt="Calvin Klein" width={100} height={50} />
    </section>
  );
};

export default Brands;