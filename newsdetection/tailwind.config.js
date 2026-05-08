/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acid: '#D2E823',
        paper: '#F8F4E8',
        ink: '#09090B',
      },
      fontFamily: {
        display: ['"Dela Gothic One"', 'cursive'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'hard-sm': '2px 2px 0px 0px #09090B',
        'hard-md': '4px 4px 0px 0px #09090B',
        'hard-lg': '8px 8px 0px 0px #09090B',
      },
      keyframes: {
        glitch: {
          '0%':   { transform: 'translate(0,0)' },
          '20%':  { transform: 'translate(-2px, 2px)' },
          '40%':  { transform: 'translate(-2px, -2px)' },
          '60%':  { transform: 'translate(2px, 2px)' },
          '80%':  { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '1' },
        },
        scanLine: {
          '0%':   { top: '0%' },
          '100%': { top: '100%' },
        },
        ringRotate: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        ringRotateReverse: {
          from: { transform: 'rotate(360deg)' },
          to:   { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        glitch:              'glitch 0.3s infinite',
        floating:            'floating 3s ease-in-out infinite',
        marquee:             'marquee 35s linear infinite',
        'scan-pulse':        'scanPulse 2s ease-in-out infinite',
        'scan-line':         'scanLine 3s linear infinite',
        'ring-rotate':       'ringRotate 8s linear infinite',
        'ring-rotate-rev':   'ringRotateReverse 12s linear infinite',
      },
    },
  },
  plugins: [],
}
