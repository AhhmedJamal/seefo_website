import Image from "next/image";
import { SiImagej } from "react-icons/si";

const Gallery = () => {
  return (
    <div className="my-3">
      <h2>Portfolio</h2>
      <div className="card">
        <SiImagej size={70} />
      </div>
    </div>
  );
};

export default Gallery;
