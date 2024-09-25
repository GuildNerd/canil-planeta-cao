/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cinza': '#3F495A',
        'bege': '#f8f4e4',
        marrom: {
          'suave': '#3a3132',
          'chumbo': '#3A3435',
        },
        vermelho: {
          'vivo': '#d22042',
          'suave': '#c22047',
        },
      }
    },
  },
  plugins: [],
}

