"use client";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useThemeMode } from "@/context/ThemeProvider";
import { motion } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  const { mode, toggleMode } = useThemeMode();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const blurPage = document.getElementById("blur"); // Replace with your actual element ID

    if (blurPage instanceof HTMLElement) {
      if (isOpen) {
        blurPage.style.filter = "blur(0px)";
      } else {
        blurPage.style.filter = "blur(2px)";
      }
    }
  };
  return (
    <header className=" container m-auto flex items-center justify-between w-full py-5 relative px-4 sm-px-0">
      <Link href={"/"} className="font-[myLogo] text-[35px]">
        Seefo
      </Link>
      <nav className="flex sm:gap-11 gap-5 items-center selection:bg-transparent">
        <div className="cursor-pointer" onClick={toggleMode}>
          {mode ? <FaMoon size={20} /> : <BsFillSunFill size={22} />}
        </div>
        <HiMenuAlt3 size={30} onClick={toggleMenu} className="sm:hidden" />
        <Nav isMobile={false} setIsOpen={setIsOpen} />
      </nav>
      <motion.nav
        className="z-10 sm:hidden flex flex-col gap-10 justify-center h-fit bg-[#fefaf6] dark:bg-[#0b0b0b] [box-shadow:0_4px_8px_rgba(20,_20,_20,_0.1)] dark:[box-shadow:0_7px_8px_rgba(60,_60,_60,_0.1)] fixed top-0 left-0 w-full p-[20px] border-b border-[#b5b5b5] dark:border-[#292929]"
        initial={{ y: "-110%" }}
        animate={{ y: isOpen ? 0 : "-110%" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <Nav isMobile={true} setIsOpen={setIsOpen} />

        <IoClose
          onClick={toggleMenu}
          size={30}
          className="absolute top-5 right-5"
        />
      </motion.nav>
    </header>
  );
};

export default Header;
