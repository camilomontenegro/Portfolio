/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      colors: {
        'retro-blue': {
          50: '#F0F8FF',
          100: '#E6F3FF', 
          200: '#CCCCFF',
          300: '#9DDCF0',
          400: '#87CEEB',
          500: '#5BA0F2',
          600: '#4A90E2',
          700: '#316AC5',
          800: '#1E3A8A',
          900: '#0055AA',
          950: '#000080'
        },
        'retro-cyan': '#00BFFF',
        'retro-teal': '#20B2AA',
        'ocean-blue': '#0055AA',
        'electric-blue': '#00BFFF'
      },
      boxShadow: {
        'retro-3d': 'inset 2px 2px 0px #87CEEB, inset -2px -2px 0px #0055AA, 3px 3px 0px #000080',
        'retro-glow': '0 0 10px rgba(74, 144, 226, 0.5)',
        'blue-inset': 'inset 0 2px 4px rgba(135,206,235,0.3)',
      },
      backgroundImage: {
        'retro-gradient': 'linear-gradient(135deg, #4A90E2 0%, #316AC5 50%, #1E3A8A 100%)',
        'retro-titlebar': 'linear-gradient(90deg, #316AC5 0%, #4A90E2 50%, #316AC5 100%)',
        'desktop-blue': 'linear-gradient(45deg, #0055AA 25%, #0066CC 25%, #0066CC 50%, #0055AA 50%, #0055AA 75%, #0066CC 75%)'
      }
    },
  },
  plugins: [],
}