/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        "1": '0 16px 60px #866DC926',
      },
        fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#29B6F6',  // or whatever hex you want
      },
    },
  },
  plugins: [],
}

