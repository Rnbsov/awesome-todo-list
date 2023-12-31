/** @type {import('tailwindcss').Config} */
import gridAreas from '@savvywombat/tailwindcss-grid-areas'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1F1D2B', // #1a1433 
        darkOutline: '#2A2836',
        cl1: '#FF6A75', 
        cl2: '#FC9F24'
      },
      gridTemplateAreas: {
        layout: [
          'sidebar header header',
          'sidebar main main',
          'sidebar main main',
        ],
      },
      gridTemplateColumns: {
        layout: 'auto 1fr 1fr',
      },
      gridTemplateRows: {
        layout: '80px 1fr 1fr',
      },
    },
  },
  plugins: [gridAreas],
}
