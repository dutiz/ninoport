const config = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        fontFamily: {
          sans: ["var(--font-poppins)", ...config.fontFamily.sans],
        },
      },
      colors: {
        gray: {
          ...config.colors.gray,
          200: "#F4F4F4",
          300: "#DCDFE0",
          500: "#DCDFE0",
          700: "#151414",
          800: "#3D3D3D",
          900: "#0C151D",
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      gridGutterWidth: "32px",
      containerMaxWidths: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    }),
    require("@tailwindcss/aspect-ratio"),
  ],
  darkMode: "class",
};
