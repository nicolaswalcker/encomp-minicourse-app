/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['lemonade'],
  },
  plugins: [daisyui],
}
