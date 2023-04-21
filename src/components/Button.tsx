"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => {
        router.refresh();
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 180 }}
      className="absolute bottom-[-32px] left-0 right-0 m-auto flex h-16 w-16 transform items-center justify-center rounded-full bg-primary-NeonGreen transition duration-75 ease-in-out hover:shadow-[0_0_20px_0] hover:shadow-primary-NeonGreen"
    >
      <Image src="icon-dice.svg" alt="Dice" width={25} height={25} />
    </motion.button>
  );
};

export default Button;
