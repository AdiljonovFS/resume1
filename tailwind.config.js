/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // 'blue': '#1fb6ff',
      'bgcolor' : '#274D68',
      'white': '#ffffff',
      'black': '#000000',
      "gray" : '#5A5A5A',
      'whiteS' : '#D9D9D9',
      'red' : '#FF0000',
      'bgSett': '#F3F3F3',
      'oneid' :'#8F00FF',
      'tasdiq' : '#00AB44', 
      "yellow-500": '#FFD700',
      'green-500' : '#00FF00',
      'blue-500' : '#0000FF',
      'gray-300' : '#D3D3D3',
    },

    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],

}

