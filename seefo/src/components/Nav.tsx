import Link from "next/link";
import { Dispatch } from "react";

const Nav = ({
  isMobile,
  setIsOpen,
}: {
  isMobile: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/chat", label: "Chat" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <ul
      className={
        `${isMobile !== true ? "sm:flex hidden " : "flex flex-col "}` +
        "items-center gap-7 transition-all"
      }
    >
      {links.map((link, index) => (
        <li key={index}>
          <Link
            onClick={() => setIsOpen(false)}
            className="block w-full h-auto border-transparent transition border-b duration-200 hover:border-[#0b0b0b] dark:hover:border-[#f6f6f6] hover:animate-pulse hover:scale-105"
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
