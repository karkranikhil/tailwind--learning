module.exports = {
  purge: {
    // enabled:true,
    content: ["./index.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0fa9e6',
          light: '#3fbaeb',
          dark: '#0c87ba',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
