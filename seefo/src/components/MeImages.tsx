import Image from "next/image";

const MeImages = () => {
  const images = [
    "/images/me.jpg",
    "/images/me2.jpg",
    "/images/me3.jpg",
    "/images/me4.jpg",
  ];
  return (
    <div className="relative  w-full my-5 h-[200px]">
      <Image
        src="/images/me.jpg"
        width={150}
        height={150}
        alt="img-1"
        className="absolute top-6 right-[41px] z-[10] transform  "
      />
      <Image
        src="/images/me2.jpg"
        width={150}
        height={150}
        alt="img-2"
        className="absolute top-[60px] right-[101px] z-[2] transform rotate-12 "
      />
      <Image
        src="/images/me3.jpg"
        width={150}
        height={150}
        alt="img-3"
        className="absolute top-0 right-[10px] z-[4] transform -rotate-45  "
      />
      <Image
        src="/images/me4.jpg"
        width={150}
        height={150}
        alt="img-4"
        className="absolute top-[70px] right-[6px] z-[1] transform -rotate-12 "
      />
    </div>
  );
};

export default MeImages;
