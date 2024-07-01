import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Contact = () => {
  return (
    <section
      id="blur"
      className="flex flex-col justify-evenly items-center h-[88vh]"
    >
      <h1 className="text-[30px]">Contact</h1>
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
        <Link href={"https://wa.me/01060315379"} target="_blank">
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
