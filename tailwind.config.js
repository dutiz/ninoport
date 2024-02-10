module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "var(--font-poppins)",
      serif:
        'var(--libre-baskerville), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {},
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
