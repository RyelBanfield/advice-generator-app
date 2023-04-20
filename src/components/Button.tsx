"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.refresh();
      }}
      className="absolute bottom-[-32px] left-0 right-0 m-auto flex h-16 w-16 transform items-center justify-center rounded-full bg-primary-NeonGreen transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_20px_0] hover:shadow-primary-NeonGreen"
    >
      <Image src="icon-dice.svg" alt="Dice" width={25} height={25} />
    </button>
  );
};

export default Button;
