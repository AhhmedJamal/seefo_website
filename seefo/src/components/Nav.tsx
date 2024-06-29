import Link from "next/link";

const Nav = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <ul
      className={
        `${isMobile !== true ? "sm:flex hidden " : "flex flex-col "}` +
        "items-center gap-7 transition-all"
      }
    >
      <li>
        <Link
          className="block w-full h-auto border-transparent transition border-b duration-200 hover:border-[#0b0b0b] dark:hover:border-[#f6f6f6] hover:animate-pulse hover:scale-105"
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="block w-full h-auto border-transparent transition border-b duration-200 hover:border-[#0b0b0b] dark:hover:border-[#f6f6f6] hover:animate-pulse hover:scale-105"
          href="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="block w-full h-auto border-transparent transition border-b duration-200 hover:border-[#0b0b0b] dark:hover:border-[#f6f6f6]  hover:animate-pulse hover:scale-105"
          href="/chat"
        >
          Chat
        </Link>
      </li>
      <li>
        <Link
          className="block w-full h-auto border-transparent transition border-b duration-200 hover:border-[#0b0b0b] dark:hover:border-[#f6f6f6]  hover:animate-pulse hover:scale-105"
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
