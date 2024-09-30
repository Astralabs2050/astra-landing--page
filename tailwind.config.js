/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('../src/asset/bgImage1.svg')",
        'bg2': "url('../src/asset/BACKGROUND-BLACK2.png')",
        'bg3': "url('../src/asset/BACKGROUND-BLACK3.png')",
        'bg4': "url('../src/asset/BACKGROUND-BLACK4.png')",
        'bg5': "url('../src/asset/BACKGROUND-BLACK5.png')",
        'bg6': "url('../src/asset/BACKGROUND-BLACK6.png')",
        'bg7': "url('../src/asset/BACKGROUND-BLACK7.png')",
        'bg8': "url('../src/asset/Grunge.svg')",
        'bg9': "url('../src/asset/Grunge2.svg')",
        'bg10': "url('../src/asset/Blur-Theme.svg')",
        'bg11': "url('../src/asset/Blur-Theme2.svg')",
        'bg12': "url('../src/asset/Blur-Theme3.svg')",
        'rectangle': "url('../src/asset/Rectangle 24022.svg')",

      },
      colors: {
        customGray: 'rgba(217, 217, 217, 0.1)', // Define the custom color
      },
    },
  },
  plugins: [],
}