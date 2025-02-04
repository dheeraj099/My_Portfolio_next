import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
        'custom-gradient-disabled': 'linear-gradient(to right, #1a1a1a, #2e2e2e, #3a3a3a)',
      },
    },
  },
  plugins: [],
} satisfies Config;
