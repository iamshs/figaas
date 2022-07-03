module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d10000",
          secondary: "#3ABFF8",
          accent: "#e5e7eb",
          neutral: "#3D4451",
          "base-100": "#ffffff",
          info: "#570DF8",
          // info: "#3ABFF8",
          success: "#e7e5e4",
          // success: "#36D399",
          warning: "#6b7280",
          error: "#F87272",
          
        },
      },
      "dark",
      "cupcake",
    ],
  },
};