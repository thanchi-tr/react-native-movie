/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }], // 10px size
      },
      colors:{
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: '#D6c6ff',
          200: '#A8B5DB',
          300: '#9Ca4AB'
        },
        dark: {
          100: '#221f3d',
          200: "#0f0d23",
        }
      }

    },
  },
  plugins: [],
}

