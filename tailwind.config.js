/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          opensans: ["Open Sans", "sans-serif"],
          nunito: ["Nunito", "sans-serif"],
          arima: ["Arima", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          merriweather: ["Merriweather", "sans-serif"],
          robot: ["Roboto", "sans-serif"],
          nunitosans: ["Nunito Sans", "sans-serif"],
          worksans: ["Work Sans", "sans-serif"],
          robotocondensed: ["roboto condensed", "sans-serif"],
          arimo: ["Arimo", "sans-serif"],
      },
      colors: {
          'custom': {
              'blue': {
                  100: '#70ACE0',
                  101: '#0074AF',
              },
              'yellow': {
                100: '#FBC01B',
                101: '#F1D68E',
                102: '#FACC15',
                103: '#F1B331',
                104: '#FF9800',
            },
            'orange': {
                100: '#EA580C',
                101: '#EA580CCC',
                201: '#FB923C'
            },
            'black': {
                100: '#252525',
                101: '#242424',
                102: '#0F172A',
                103: '#191919',
                104: '#70727B',
                105: '#2B2B2B',
            },
            'gray': {
                100: '#838383',
                101: '#BDBDD1',
                102: '#5F5F7E',
                103: '#F9F9F9',
                104: '#F1F5F9',
                201: '#6B8198',
                202: '#ACACAC',
            },
            'peach': {
                100: '#FFF4D2',
            },
              'green': {
                100: '#E5ECE8',
                101: '#71B856',
                102: '#3B8964',
            },
              'red': {
                  100: '#F53636',
                  101: '#F00',
              }
          }
      }
  },
  },
  plugins: [],
}

