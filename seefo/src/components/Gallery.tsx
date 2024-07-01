import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="card">
        <Image src="image1.jpg" alt="Image 1" />
      </div>
    </div>
  );
};

export default Gallery;
