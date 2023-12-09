/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        exs: {'min': '0px', 'max': '320px'},
        sm: {'min': '320px', 'max': '450px'},
        md: {'min': '450px', 'max': '768px'},
        lg: {'min': '768px', 'max': '1200px'},
        xl: '1200px',

        sbg: {'min': '0px', 'max': '768px'},
        mbg: {'min': '768px', 'max': '1024px'},
        lbg: '1024px',
      },

      colors: {
        'lc': 'hsl(193, 38%, 86%)',
        'ng': 'hsl(150, 100%, 66%)',
        'gb': 'hsl(217, 19%, 38%)',
        'dgb': 'hsl(217, 19%, 24%)',
        'db': 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
      },

      backgroundImage: {
        'bgHome1': "url('src/assets/home/background-home-desktop.jpg')",
        'bgHome2': "url('src/assets/home/background-home-tablet.jpg')",
        'bgHome3': "url('src/assets/home/background-home-mobile.jpg')",

        'bgDest1': "url('src/assets/destination/background-destination-desktop.jpg')",
        'bgDest2': "url('src/assets/destination/background-destination-tablet.jpg')",
        'bgDest3': "url('src/assets/destination/background-destination-mobile.jpg')",

        'bgCrew1': "url('src/assets/crew/background-crew-desktop.jpg')",
        'bgCrew2': "url('src/assets/crew/background-crew-tablet.jpg')",
        'bgCrew3': "url('src/assets/crew/background-crew-mobile.jpg')",

        'bgTech1': "url('src/assets/technology/background-technology-desktop.jpg')",
        'bgTech2': "url('src/assets/technology/background-technology-tablet.jpg')",
        'bgTech3': "url('src/assets/technology/background-technology-mobile.jpg')",
      }

    },
  },
  plugins: [],
}