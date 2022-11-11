/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "custom-hero-icon-left-scroll": "url('../public/hero-bg-icon-left-scroll.svg')",
        "custom-hero-icon-right-scroll": "url('../public/hero-bg-icon-right-scroll.svg')",
        "custom-carousel-icon-left-scroll": "url('../public/carousel-bg-icon-left-scroll.svg')",
        "custom-carousel-icon-right-scroll": "url('../public/carousel-bg-icon-right-scroll.svg')",
        "custom-bg-icon-view-3d": "url('../public/bg-icon-view-3d.svg')",
      },
      boxShadow: {
        'custom-input-email-shadow': '0px 232px 93px rgba(0, 0, 0, 0.01), 0px 131px 78px rgba(0, 0, 0, 0.04), 0px 58px 58px rgba(0, 0, 0, 0.07), 0px 15px 32px rgba(0, 0, 0, 0.08), 0px 0px 0px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [
  ],
}
