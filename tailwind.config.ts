import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      gray: {
        "500": "#F2F2F2",
        "600": "#848484",
      },
      white: {
        "500": "#fff",
      },
      black: {
        "500": "#262626",
      },
      orange: {
        "500": "#FF6B00",
      }
    },
  },
  plugins: [],
};
export default config;
