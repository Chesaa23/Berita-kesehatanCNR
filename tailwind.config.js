/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
         "primary": "#010851",
         "scondary": "#9A7AAF1",
         "tartiary": "707070",
         "pink": "#EE9AES"
      }
    },
  },
  plugins: [],
}

