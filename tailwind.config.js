/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sansSerif: ['Source Code Pro', 'sans-serif'],
      mono: ['Source Sans 3', 'sans-serif'],
      handWriting: ['Kalam', 'cursive'],
    },
    extend: {
      colors: {
        lavendarIndigo: '#8657E1',
        daisyBush: '#4714a5',
        goldenFizz: '#feff48',
        robinEggBlue: '#00E9C0',
        carribeanGreen: '#1CC6A0',
        primaryPurple: '#7209B7',
        pastelPurple: '#B2A1BB',
        fog: '#DECAEC',
        monsoon: '#777878',
        silver: '#c0c0c0',
        gallery: '#EFEAF2',
        whisper: '#F9F4F9',
        scalet: '#F72F45',
      }
    },
  },
  plugins: [],
}

