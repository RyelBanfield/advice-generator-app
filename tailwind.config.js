/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          LightCyan: "hsl(193, 38%, 86%)",
          NeonGreen: "hsl(150, 100%, 66%)",
        },
        neutral: {
          GrayishBlue: "hsl(217, 19%, 38%)",
          DarkGrayishBlue: "hsl(217, 19%, 24%)",
          DarkBlue: "hsl(218, 23%, 16%)",
        },
      },
    },
  },
  plugins: [],
};
