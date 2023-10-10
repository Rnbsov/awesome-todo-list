/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout': [
          'sidebar header header',
          'sidebar main main',
          'sidebar main main',
        ],
      },
      gridTemplateColumns: {
        'layout': '1fr 1fr 1fr',
      },
      gridTemplateRows: {
        'layout': 'auto 1fr 1fr',
      },
    },
  },
  plugins: [],
}

