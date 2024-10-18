import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    container: {
      center: true,
      padding: "2rem",
    },

    extend: {
      borderRadius: {
        full: "9999px",
        "5xl": "30px",
      },
      screens: {
        xxxxs: "290px",
        xxxs: "330px",
        xxs: "400px",
        xs: "500px",

        "2xl": "1400px",
      },

      colors: {
        purple: {
          "80": "var(--purple-80)",
          "50": "var(--purple-50)",
        },
        green: { "40": "var(--green-40)" },
        light: { "90": "var(--light-90)", "60": "var(--light-60)" },
        dark: {
          "2": "var(--dark-2)",
          "6": "var(--dark-6)",
          "10": "var(--dark-10)",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      // Adds support for targeting all children except the last child
      addVariant("not-last-child", "& > *:not(:last-child)");
    },
  ],
};
export default config;
