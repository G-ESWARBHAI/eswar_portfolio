/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'golden-green': '#B8E994',
        'teal-gold': '#00D9A5',
        'holographic-green': '#39FF14',
        'gold': '#FFD700',
        'gold-bright': '#FFED4E',
        'gold-dark': '#FFA500',
        'bg-dark': '#000000',
        'bg-deep': '#0A0A0A',
        'bg-darker': '#050505',
      },
      backgroundImage: {
        'gradient-holographic': 'linear-gradient(135deg, #B8E994, #00D9A5, #FFD700, #FFED4E)',
        'gradient-golden-green': 'linear-gradient(135deg, #39FF14, #B8E994, #FFD700)',
        'gradient-teal-gold': 'linear-gradient(135deg, #00D9A5, #FFD700, #FFED4E)',
        'gradient-glow': 'linear-gradient(180deg, rgba(184, 233, 148, 0.1), rgba(255, 215, 0, 0.1))',
      },
      boxShadow: {
        'neon-golden-green': '0 0 30px rgba(184, 233, 148, 0.8), 0 0 60px rgba(0, 217, 165, 0.4)',
        'neon-holographic': '0 0 40px rgba(57, 255, 20, 0.7), 0 0 80px rgba(255, 215, 0, 0.5)',
        'neon-gold': '0 0 35px rgba(255, 215, 0, 0.9), 0 0 70px rgba(255, 237, 78, 0.6)',
        'glow-golden-green': '0 0 50px rgba(184, 233, 148, 0.6), 0 0 100px rgba(0, 217, 165, 0.3)',
        'glow-holographic': '0 0 60px rgba(57, 255, 20, 0.8), 0 0 120px rgba(255, 215, 0, 0.4), inset 0 0 30px rgba(184, 233, 148, 0.2)',
        'glow-intense': '0 0 80px rgba(184, 233, 148, 0.7), 0 0 150px rgba(255, 215, 0, 0.5)',
        'glow-soft': '0 0 20px rgba(184, 233, 148, 0.4), 0 0 40px rgba(255, 215, 0, 0.2)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

