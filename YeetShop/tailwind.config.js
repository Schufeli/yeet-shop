module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: { 
      colors: {
          leue: {
              100: "#1E65C2",
              200: "#216ED4",
              300: "#2B79DE",
              400: "#FDD400",
              500: "#FFDA1F",
              600: "#FFE047",
              700: "#F8F9FA",
              800: "#343A40",
              900: "#212529"
          }
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        paragraph: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        'nav-height': '100px',
        'logo': '80px',
      },
      keyframes: {
        fadeLeft: {
          '0%': { left: '-100%' },
          '100%:': { left: '0'}
        },
        fadeRight: {
          '0%': { right: '-100%' },
          '100%:': { right: '0'}
        },
        fadeDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        flyInRight: {
          '0%': { opacity: '0', transform: 'translateX(80px)' },
          '100%': { opacity: '1', transform: 'translateX(0px)' }
        }
      },
      animation: {
        fadeLeft: 'fadeLeft 1s',
        fadeRight: 'fadeRight 1s',
        fadeDown: 'fadeDown 1s',
        flyInRight: 'flyInRight 1s ease-out'
      }
    }
  },
  plugins: [],
} 