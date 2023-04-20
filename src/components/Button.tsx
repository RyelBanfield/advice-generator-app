"use client";

import Image from "next/image";

const Button = () => {
  return (
    <button
      onClick={() => {
        window.location.reload();
      }}
      className="bg-primary-NeonGreen rounded-full w-16 h-16 flex items-center justify-center absolute bottom-[-32px] m-auto left-0 right-0 transition ease-in-out hover:shadow-primary-NeonGreen hover:shadow-[0_0_20px_0] transform hover:scale-110 duration-300"
    >
      <Image src="icon-dice.svg" alt="Dice" width={25} height={25} />
    </button>
  );
};

export default Button;
