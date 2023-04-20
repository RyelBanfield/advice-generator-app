import { Manrope } from "next/font/google";
import Image from "next/image";

import Button from "@/components/Button";

const manrope = Manrope({
  subsets: ["latin-ext"],
  weight: "800",
});

type Advice = { slip: { id: number; advice: string } };

const Home = async () => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  const data: Advice = await response.json();

  return (
    <main
      className={`flex h-screen items-center justify-center bg-neutral-DarkBlue antialiased ${manrope.className}`}
    >
      <div className="relative flex h-96 w-[60%] max-w-lg flex-col items-center justify-center rounded-xl bg-neutral-DarkGrayishBlue p-3 text-center">
        <h1 className="mb-6 text-xs font-bold uppercase tracking-widest text-primary-NeonGreen">
          Advice #{data.slip.id}
        </h1>

        <p className="mb-6 text-2xl text-primary-LightCyan">
          “{data.slip.advice}”
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
      </div>
    </main>
  );
};

export default Home;
