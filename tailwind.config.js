module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "4rem",
      },
      colors: {
        warning: "#ffdda9",
        primary: "#141432",
        muted: "#707092",
        section: "#f3f6f9",
      },
    },
    fontFamily: {
      nunito: ["poppins", "sans-serif"],
    },
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
      gridGutterWidth: "1.2rem",
    }),
  ],
};
