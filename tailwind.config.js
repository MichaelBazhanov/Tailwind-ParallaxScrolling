module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem', // 18px
        '15': '3.75rem', // 60px
        '2.5': '0.625rem', // 10px
        '0.5': '0.125rem', // 2px
      },
      colors: {
        'blue-1': '#2b1055',
        'blue-2': '#7597de',
        'brown-1': '#1c0522',
      },
      // backgroundImage: {
      //   'stars': "url('/src/asset/images/stars.png')",
      // },
      // boxShadow: {
      //   'me': '0px 3px 20px rgba(0, 0, 0, 0.2)',
      //   'me-2': '0px 10px 20px -5px rgba(0, 0, 0, 0.1)',
      //   'me-3': '0px 5px 20px 2px rgba(0, 0, 0, 0.1)',
      //   'rounded-top': '30px 30px 0px 0px #fff',
      //   'rounded-bottom': '30px -30px 0px 0px #fff',
      // },
      // animation: {
      //   'menu-in': 'menu-in 0.3s linear forwards alternate', //infinite
      //   'menu-out': 'menu-out 0.3s linear forwards alternate', //infinite
      // },
      // keyframes: {
      //   'menu-in': {
      //     '0%': { transform: 'translate(-100%, 0)', opacity: '0%' },
      //     '100%': { transform: 'translate(0%, 0)', opacity: '100%' },
      //   },
      //   'menu-out': {
      //     '0%': { transform: 'translate(0%, 0)', opacity: '100%' },
      //     '100%': { transform: 'translate(-100%, 0)', opacity: '0%' },
      //   }
      // }
    },
  },
  plugins: [],
}
