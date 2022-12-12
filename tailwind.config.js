/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        azulRoyal: '#2B3193',
        azulPetroleo: '#27818B',
        laranja: '#F36B2B',
        terra: '#C15525',
        vinho: '#7C2B17',
        amarelo: '#FFD65C',
        preto: '#000000',
        branco: '#ffffff',
        vinhoGhost: '#7B29004D',
        azulPetroleoGhost: '#24828A4D',
        amareloGhost: '#FFD65C4D',
        terraGhost: '#C155254D',
        sucesso: '#A3E635',
        alerta: '#FCD34D',
        erro: '#E11D48',
        info: '#0EA5E9',
      },
    },
  },
  plugins: [],
}
