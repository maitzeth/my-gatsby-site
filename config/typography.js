import Typography from 'typography'

const typography = new Typography({
  title: 'Maitzeth',
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  googleFonts: [
    {
      name: 'Oswald',
      styles: ['700'],
    },
    {
      name: 'Roboto',
      styles: ['400'],
    },
  ],
})

export default typography
