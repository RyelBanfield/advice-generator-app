"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { Advice } from "@/app/page";

import Button from "./Button";

const Card = ({ advice }: { advice: Advice }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={advice.slip.id}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex h-96 w-[80%] max-w-lg flex-col items-center justify-center rounded-xl bg-neutral-DarkGrayishBlue p-3 text-center"
      >
        <h1 className="mb-6 text-xs font-bold uppercase tracking-widest text-primary-NeonGreen">
          Advice #{advice.slip.id}
        </h1>

        <p className="mb-6 text-2xl text-primary-LightCyan">
          “{advice.slip.advice}”
        </p>

        <div className="flex items-center justify-center">
          <Image
            src="/pattern-divider-mobile.svg"
            alt="Divider"
            width={300}
            height={20}
          />
        </div>

        <Button />
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
