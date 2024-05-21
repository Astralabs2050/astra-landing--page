/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('../src/asset/BACKGROUND-BLACK1.png')",
        'bg2': "url('../src/asset/BACKGROUND-BLACK2.png')",
        'bg3': "url('../src/asset/BACKGROUND-BLACK3.png')",
        'bg4': "url('../src/asset/BACKGROUND-BLACK4.png')",
        'bg5': "url('../src/asset/BACKGROUND-BLACK5.png')",
        'bg6': "url('../src/asset/BACKGROUND-BLACK6.png')",
        'bg7': "url('../src/asset/BACKGROUND-BLACK7.png')",
        'rectangle': "url('../src/asset/Rectangle 24022.svg')",

      }
    },
  },
  plugins: [],
}