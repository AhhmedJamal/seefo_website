"use client";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = () => {};
  return (
    <section className="flex flex-col justify-evenly items-center h-[80vh] px-4 sm-px-0 w-full">
      <h1 className="text-[30px]">Contact</h1>
      <form className="flex flex-col gap-6 w-full" onClick={handleSubmit}>
        <div className="flex justify-between w-full">
          <input
            placeholder="First Name"
            type="text"
            className="w-[49%] p-2 border border-zinc-600 dark:border-zinc-300 rounded-md bg-zinc-100 dark:bg-zinc-900 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
          />
          <input
            placeholder="Last Name"
            type="text"
            className="w-[49%] p-2 border border-zinc-600 dark:border-zinc-300 rounded-md bg-zinc-100 dark:bg-zinc-900 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
          />
        </div>
        <input
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          className="p-2 border border-zinc-600 dark:border-zinc-300 rounded-md bg-zinc-100 dark:bg-zinc-900 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
        />
        <input
          placeholder="Phone Number"
          type="number"
          className="p-2 border border-zinc-600 dark:border-zinc-300 rounded-md bg-zinc-100 dark:bg-zinc-900 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
        />
        <button
          type="submit"
          className="w-[50%] py-2 rounded-md text-[17px]  bg-[#0b0b0b] dark:bg-[#fefaf6] dark:text-[#0b0b0b] text-[#fefaf6]"
        >
          Submit
        </button>
      </form>
      <div className="flex justify-center gap-8">
        <Link
          href={"https://www.facebook.com/saif.khalid.161214/"}
          target="_blank"
        >
          <FaFacebookF
            size={30}
            className="dark:bg-[#fefaf6] bg-[#0b0b0b] text-[#fefaf6] dark:text-[#0b0b0b] rounded-lg p-1"
          />
        </Link>
        <Link
          href={
            "https://www.instagram.com/saif_photographyy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          }
          target="_blank"
        >
          <FaInstagram
            size={30}
            className="dark:bg-[#fefaf6] bg-[#0b0b0b] text-[#fefaf6] dark:text-[#0b0b0b] rounded-lg p-1"
          />
        </Link>
        <Link href={"https://wa.me/+201060315379"} target="_blank">
          <FaWhatsapp
            size={30}
            className="dark:bg-[#fefaf6] bg-[#0b0b0b] text-[#fefaf6] dark:text-[#0b0b0b] rounded-lg p-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
