/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "darkBlue": "hsl(209, 23%, 22%)",
      "veryDarkBlueBg": "hsl(207, 26%, 17%)",
      "veryLightBlueText": "hsl(200, 15%, 8%)",
      "darkGray": "hsl(0, 0%, 52%)",
      "veryLightGray": "hsl(0, 0%, 98%)",
      "white": "hsl(0, 0%, 100%)" 
    },
    screens: {
      "mobile": "375px",
      "desktop": "1440px"
    },
    fontFamily: {
      nunito: ['Nunito Sans', "sans-serif"]
    },
    extend: {
      fontSize: {
        "homeTextSize": "14px",
        "detailTextSize": "16px"
      },
      fontWeight: {
        "fw-light": "300",
        "fw-normal": "600",
        "fw-bold": "800"
      }
    },
  },
  plugins: [],
}