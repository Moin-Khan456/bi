module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--primary-bg)",
        primaryTx: "var(--primary-text)",
        secondaryTx: "var(--secondary-text)",
        secondaryBg: "var(--secondary-bg)"
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      screens: {
        "3xl": "1920px",
      },
      backgroundImage: {
        hero: "url('https://d1u4arv5y5eda6.cloudfront.net/images/hero.png')",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
