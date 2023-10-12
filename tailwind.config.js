/** @type {import('tailwindcss').Config} */
import gridAreas from '@savvywombat/tailwindcss-grid-areas'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: [
          'sidebar header header',
          'sidebar main main',
          'sidebar main main',
        ],
      },
      gridTemplateColumns: {
        layout: '1fr 1fr 1fr',
      },
      gridTemplateRows: {
        layout: 'auto 1fr 1fr',
      },
    },
  },
  plugins: [gridAreas],
}
