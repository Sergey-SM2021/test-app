import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      gray: {
        "400": "#F2F2F2",
        "500": "#333333",
        "600": "#848484",
      },
      white: {
        "500": "#fff",
      },
      black: {
        "500": "#262626",
        "900": "#000",
      },
      orange: {
        "500": "#FF6B00",
      }
    },
  },
  plugins: [],
};
export default config;
