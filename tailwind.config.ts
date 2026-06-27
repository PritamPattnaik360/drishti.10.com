import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#141414",
        "surface-elevated": "#1c1c1c",
        border: "#2a2a2a",
        accent: "#00d395",
        gold: "#f5a623",
        error: "#ff4d4f",
        "text-primary": "#ffffff",
        "text-secondary": "#8a8a8a",
        "text-disabled": "#4a4a4a",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.03em",
      },
    },
  },
  plugins: [],
}

export default config
