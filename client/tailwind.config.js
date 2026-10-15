/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#060b18',
          850: '#0a1024',
          800: '#0e1630',
          700: '#152144',
          600: '#1e3060',
        },
        electric: {
          cyan: '#00f2fe',
          blue: '#38bdf8',
          purple: '#a855f7',
          violet: '#7c3aed',
          indigo: '#6366f1',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(40px)' },
          '100%': { opacity: '0.8', filter: 'blur(55px)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(168, 85, 247, 0.3)',
        'glow-card': '0 10px 30px -10px rgba(2, 6, 23, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}
