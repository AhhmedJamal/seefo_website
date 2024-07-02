"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const ButtonScrollTop = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed right-7 bottom-7 text-[30px] text-[#fefaf6] bg-[#0b0b0b] dark:bg-[#fefaf6] dark:text-[#0b0b0b] p-[2px] rounded-md"
      >
        <IoIosArrowUp onClick={ScrollTop} />
      </motion.div>
    </>
  );
};

export default ButtonScrollTop;
