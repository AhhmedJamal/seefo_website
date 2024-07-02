"use client";
import { motion } from "framer-motion";

const AnimationText = ({ text, style }: { text: string; style: string }) => {
  const words = text.split(" ");

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, 
      },
    }),
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className={"capitalize " + style}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            style={{ display: 'inline-block', marginRight: '0.3em' }} // Adjust margin for words
          >
            {word}
          </motion.span>
        ))}
    </div>
  );
};

export default AnimationText;
