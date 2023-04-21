import { Manrope } from "next/font/google";

import Card from "@/components/Card";

const manrope = Manrope({
  subsets: ["latin-ext"],
  weight: "800",
});

export type Advice = { slip: { id: number; advice: string } };

const Home = async () => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  const data: Advice = await response.json();

  return (
    <main
      className={`flex h-screen items-center justify-center bg-neutral-DarkBlue antialiased ${manrope.className}`}
    >
      <Card advice={data} />
    </main>
  );
};

export default Home;
