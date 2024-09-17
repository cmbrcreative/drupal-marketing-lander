/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rebond: ["ES Rebond Grotesque"],
        suisse: ["Suisse Intl"],
        mono: ["Suisse Mono"],
      },
      colors: {
        green: "#00874C",
        grey: "#757575",
      },
      dropShadow: {
        "custom-drop": "drop-shadow(0px 0px 16px rgba(14, 237, 140, 0.64))",
      },
      backgroundImage: {
        "gradient-blurple": "linear-gradient(90deg, #0085A2 25%, #4C00C9 100%)",
        "gradient-bluegreen":
          "linear-gradient(100deg, #0BEE22 0.38%, #0FEBEB 100.38%)",
      },
      borderImage: {
        "gradient-blurple":
          "linear-gradient(90deg, #0085A2 16.8%, #4C00C9 83.81%) 1",
      },
      keyframes: {
         "pulse-in": {
          "0%": { opacity: 0 },
          "50%": { opacity: .7 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "10px" },
        "p-xl-bold": {
          fontSize: "2.4rem",
          lineHeight: "3.456rem",
        },
      });
    }),
  ],
};
