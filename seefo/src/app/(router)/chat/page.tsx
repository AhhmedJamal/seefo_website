import Image from "next/image";
import React from "react";

const Chat = () => {
  return (
    <section
    
      className="font-bold text-[40px] flex flex-col gap-5 justify-center items-center h-[60vh] px-4 sm-px-0"
    >
      Soon...
      <Image
        src={"/images/soon.png"}
        width={200}
        height={1}
        alt="soon build chat"
      />
    </section>
  );
};

export default Chat;
