import Image from "next/image";
import { PiSignatureLight } from "react-icons/pi";
const About = () => {
  return (
    <section
      id="blur"
      className="flex flex-col justify-center gap-5 items-cente px-6 sm-px-0"
    >
      <div className="flex items-center gap-3">
        <Image
          src={"/images/me4.jpg"}
          width={170}
          height={1}
          alt="image me"
          className="grayscale rounded-md"
        />
        <h1 className="text-[20px]">
          Greetings,
          <br /> I&apos;m <span className="text-[27px]">Seif</span>
        </h1>
      </div>
      <div>
        <p className="text-[14px] font-mono font-bold capitalize mt-3">
          a passionate photographer dedicated to capturing beauty and life
          through my camera lens. I always strive to deliver a unique
          photography experience that elegantly portrays moments with
          creativity. With my experience and love for art, I help you showcase
          your unique beauty and document your special moments in a way that
          inspires and lasts forever.
        </p>
      </div>
      <PiSignatureLight className="size-16 self-end dark:text-[#fefaf6] text-[#0b0b0b] " />
    </section>
  );
};

export default About;
