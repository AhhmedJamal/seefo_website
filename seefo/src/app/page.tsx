import AnimationButton from "@/components/AnimationButton";
import AnimationText from "@/components/AnimationText";
import ButtonScrollTop from "@/components/ButtonScrollTop";
import Gallery from "@/components/Gallery";
import MarqueeCamera from "@/components/MarqueeCamera";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container m-auto min-h-[1000px] overflow-hidden px-4 sm-px-0 ">
      <AnimationText
        text='" Welcome I&apos;m here toI turn ordinary moments into everlasting
        memories. With my experience and passion, I help you see the beauty in
        every moment, capture it in a way that reflects your unique spirit.
        "'
        style="text-[18px]"
      />
      <AnimationButton>
        <button className="size-[100px] my-10 hover:bg-[#000000d8] text-[20px] underline font-mono font-bold active:scale-95 transition-all  text-[#fefaf6] bg-[#0b0b0b] dark:bg-[#fefaf6] dark:text-[#0b0b0b] rounded-full">
          <Link href={"/booking"}>للحجز</Link>
        </button>
      </AnimationButton>
      <MarqueeCamera />
      <Gallery />
      <ButtonScrollTop />
    </main>
  );
}
// bg-[#f6f6f6] dark:bg-[#0b0b0b]
