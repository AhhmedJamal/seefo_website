import Header from "@/components/Header";
import Image from "next/image";
import Marquee from "react-fast-marquee";
export default function Home() {
  const images = [
    "/images/one.png",
    "/images/two.png",
    "/images/three.png",
    "/images/four.png",
    "/images/five.png",
  ];
  return (
    <main className="container m-auto min-h-screen px-4 sm-px-0">
      <Header />
      <p className="text-[20px] mt-10">
        &quot; Welcome to <br />
        the world of timeline photography with{" "}
        <span className="text-[40px] font-[myLogo]">seefo </span>
        &quot;
      </p>
      <button className="size-[180px] my-11 hover:bg-[#000000d8] active:scale-95 transition-all  text-[#fefaf6] dark:bg-[#fefaf6] dark:text-[#0b0b0b] rounded-full">
        <span className="text-[30px">For</span>
        <br /> Reservations
      </button>

      <Marquee
        gradientWidth={200}
        gradientColor="white"
        pauseOnHover={true}
        className="my-10 bg-[#fefaf6]"
      >
        <ul className="flex items-center md:gap-12 gap-4 w-full ">
          {images.map((image) => {
            return (
              <li key={image}>
                <Image
                  src={image}
                  alt="image"
                  width={50}
                  height={80}
                  className="sm:w-[100px]"
                />
              </li>
            );
          })}
        </ul>
      </Marquee>

      {/* <p className="text text-[14px] p-7 ">
        I&apos;m here to turn ordinary moments into everlasting memories through
        professional photography. With my experience and passion, I help you see
        the beauty in every moment, and capture it in a way that reflects your
        unique spirit and personality.
      </p> */}
    </main>
  );
}
// bg-[#f6f6f6] dark:bg-[#0b0b0b]
