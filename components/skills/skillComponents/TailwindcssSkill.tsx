import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function TailwindcssSkill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="/icons/skillIcon/tailwind.svg"
        alt="tailwind"
        className="max-sm:w-20 max-sm:h-20 w-24 h-24 md:h-28 md:w-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-100 h-24 w-24 md:h-28 md:w-28 max-sm:w-20 max-sm:h-20 transition duration-300 ease-in-out">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100 border bg-white bg-opacity-70 rounded-lg px-3">
            80%
          </p>
        </div>
      </div>
    </div>
  );
}
