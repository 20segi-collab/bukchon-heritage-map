/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          navy: '#0F172A',       // Deep Royal Slate
          indigo: '#1E1B4B',     // Royal Indigo
          gold: '#D97706',       // Signature Traditional Gold
          amber: '#F59E0B',      // Bright Amber Gold
          celadon: '#0D9488',    // Korean Traditional Celadon (청자)
          paper: '#FDFBF7',      // Hanji / Traditional Paper Background
          crimson: '#991B1B',    // Dancheong Red
          slate: '#475569',      // Commercial/Modern Muted Slate
          softbg: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
        serif: ['Noto Serif KR', 'serif']
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(217, 119, 6, 0.45)',
        'glow-blue': '0 0 20px rgba(13, 148, 136, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)'
      }
    },
  },
  plugins: [],
}
