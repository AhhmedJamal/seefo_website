"use client";

import Image from "next/image";
import Link from "next/link";
import { PiSignatureLight } from "react-icons/pi";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="flex flex-col justify-center gap-5 items-cente px-6 sm-px-0 pb-11">
      <div className="flex items-center gap-3">
        <Image
          src={"/images/me4.jpg"}
          width={170}
          height={1}
          alt="image me"
          className="grayscale rounded-md shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] dark:shadow-[0_5px_10px_1px_rgba(100,100,100,0.3)]"
        />
        <h1 className="text-[20px]">
          Greetings,
          <br /> I&apos;m <span className="text-[27px]">Seif</span>
        </h1>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1>About Me :</h1>
          <p className="text-zinc-400 font-mono font-bold text-[14px]">
            I am a professional photographer with over 5 years of experience in
            art studios and outdoor settings. I specialize in capturing creative
            moments that reflect the beauty of our surroundings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h1>My Goal :</h1>
          <p className="text-zinc-400 font-mono font-bold text-[14px]">
            Provide good quality photography services to achieve your vision. I
            aim to inspire you in a unique way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h1>Follow Me :</h1>
          <p className="text-zinc-400 font-mono font-bold text-[14px]">
            Connect with me on{" "}
            <Link
              href="https://www.facebook.com/saif.khalid.161214/"
              target="_blank"
              className="underline"
            >
              Facebook
            </Link>
            {" or "}
            <Link
              href="https://www.instagram.com/saif_photographyy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="underline"
            >
              Instagram
            </Link>
          </p>
        </motion.div>
      </div>
      <PiSignatureLight className="size-16 self-end dark:text-[#fefaf6] text-[#0b0b0b] " />
    </section>
  );
};

export default About;
// const text = 'a passionate photographer dedicated to capturing beauty and life through my camera lens';
