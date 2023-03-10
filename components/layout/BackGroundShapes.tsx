import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackGroundShapes({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center mt-40"
    >
      <div className="rounded-full border border-[#37b3ed] h-[200px] w-[200px] max-sm:h-[160px] max-sm:w-[160px] absolute mt-52 max-sm:mt-96 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[300px] w-[300px] max-sm:h-[240px] max-sm:w-[240px] max-sm:mt-96 absolute mt-52" />
      <div className="rounded-full border border-[#333333] h-[500px] w-[500px] max-sm:h-[400px] max-sm:w-[400px] max-sm:mt-96 absolute mt-52" />
      <div className="rounded-full border border-[#37b3ed] h-[650px] w-[650px] max-sm:h-[520px] max-sm:w-[520px] max-sm:mt-96 absolute mt-52 opacity-20 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[800px] w-[800px] max-sm:h-[640px] max-sm:w-[640px] max-sm:mt-96 absolute mt-52" />
    </motion.div>
  );
}
