"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
const AnimationButton = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
      style={{ cursor: "pointer", width: "fit-content" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationButton;
