/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom' : '0 26px 0 rgba(0,0,0,1)',
      },
      boxShadow: {
        'footer': '0px 35px 100px 10px #1e50ff',
      },
      colors: {
        yellow: '#FAFF00',
        green: "#05FF00",
        lightGreen: '#00FF38',
        lightBlue: '#1E50FF',
        blue: '#051139',
      },
      backgroundImage: {
        'navbg': "url('/GLARE.svg')",
        'herobg': "url('/Union.svg')",
        'whiteLight': "url('/bulbLight.svg')",
        'yellowLight': "url('/bulbLightYellow.svg')",
        'servicebg': "url('/serviceArrow.svg')",
        "teambg": "url('/teambg.svg')",
        "workflow": "url('/workflow.svg')",
        "decoration": "url('/Decoration.svg')",
        "stars": "url('/stars.svg')",
        "others": "url('/otherServiceBg.png')",
        "profile": "url('/Profile.svg')"
      },
      dropShadow: {
        'custom': '0px 4px 25.9px 0px #000000',
      },
      animation: {
        'slide-left': 'slide-left 20s linear infinite',
        fade: 'fade 4s ease-in-out infinite',
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        fade: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}