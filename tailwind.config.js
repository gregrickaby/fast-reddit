module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      container: {
        center: true,
        margin: 'auto'
      },
      fontFamily: {
        comic: ['ComicNeue', 'sans-serif'],
        dyslexic: ['OpenDyslexic', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
