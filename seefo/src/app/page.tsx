import MarqueeCamera from "@/components/Marquee";
import MeImages from "@/components/MeImages";

export default function Home() {
  return (
    <main className="container m-auto min-h-screen px-4 sm-px-0">
      {/* <p className="text-[20px] mt-10">
        &quot; Welcome to <br />
        the world of timeline photography with{" "}
        <span className="text-[40px] font-[myLogo]">seefo </span>
        &quot;
      </p> */}
      <MeImages />
      <button className="size-[180px] my-11 hover:bg-[#000000d8] active:scale-95 transition-all  text-[#fefaf6] bg-[#0b0b0b] dark:bg-[#fefaf6] dark:text-[#0b0b0b] rounded-full">
        <span className="text-[30px">For</span>
        <br /> Reservations
      </button>
      <MarqueeCamera />
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
