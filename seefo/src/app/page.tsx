import ButtonScrollTop from "@/components/ButtonScrollTop";
import Gallery from "@/components/Gallery";
import MarqueeCamera from "@/components/MarqueeCamera";

export default function Home() {
  return (
    <main  id="home" className="container m-auto min-h-screen overflow-hidden">
      <p className="text-[18px] mt-8">
        &quot; Welcome I&apos;m here toI turn ordinary moments into everlasting
        memories. With my experience and passion, I help you see the beauty in
        every moment, capture it in a way that reflects your unique spirit.
        &quot;
      </p>
      <button className="size-[100px] my-10 hover:bg-[#000000d8] text-[20px] underline font-mono font-bold active:scale-95 transition-all  text-[#fefaf6] bg-[#0b0b0b] dark:bg-[#fefaf6] dark:text-[#0b0b0b] rounded-full">
        للحجز
      </button>
      <MarqueeCamera />
      <Gallery />
      <ButtonScrollTop />
    </main>
  );
}
// bg-[#f6f6f6] dark:bg-[#0b0b0b]
