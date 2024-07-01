import {
  SiNikon,
  SiSony,
  SiLeica,
  SiPanasonic,
  SiFujifilm,
  SiKodak,
  SiAcer,
  SiDji,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

const MarqueeCamera = () => {
  const brands = [
    SiNikon,
    SiSony,
    SiLeica,
    SiPanasonic,
    SiFujifilm,
    SiKodak,
    SiAcer,
    SiDji,
  ];

  return (
    <Marquee
      gradientWidth={200}
      gradientColor="white"
      pauseOnHover={true}
      className="my-8 bg-[#0b0b0b] dark:bg-[#fefaf6] py-1 "
    >
      <div className="flex items-center ">
        {brands.map((BrandIcon, index) => (
          <BrandIcon
            key={index}
            className="text-[#fefaf6] dark:text-[#0b0b0b] size-11 sm:size-16 mr-8 sm:mr-[75px] lg:mr-[90px]"
          />
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeCamera;
