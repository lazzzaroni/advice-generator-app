import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          "light-cyan" : "hsl(193, 38%, 86%)",
          "neon-green": "hsl(150, 100%, 66%)"
        },
        neutral: {
          "grayish-blue": "hsl(217, 19%, 38%)",
          "dark-grayish-blue": "hsl(217, 19%, 24%)",
          "dark-blue": "hsl(218, 23%, 16%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
