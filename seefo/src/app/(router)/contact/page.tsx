import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Contact = () => {
  return (
    <section
      id="blur"
      className="flex flex-col justify-evenly items-center h-[88vh]"
    >
      <div className="flex justify-center gap-8">
        <FaFacebookF size={30} className="bg-white rounded-lg text-black p-1" />
        <FaInstagram size={30} className="bg-white rounded-lg text-black p-1" />
        <FaWhatsapp size={30} className="bg-white rounded-lg text-black p-1" />
      </div>
    </section>
  );
};

export default Contact;
