/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          950: '#020408',
          900: '#060d18',
          800: '#0a1628',
          700: '#0f1f3d',
          600: '#162952',
        },
        accent: {
          blue:  '#3b82f6',
          cyan:  '#06b6d4',
          purple:'#8b5cf6',
          violet:'#7c3aed',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, #020408 0%, #060d18 40%, #0a1628 70%, #060d18 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow':   'spin 20s linear infinite',
        'glow':        'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(59,130,246,0.3)' },
          to:   { boxShadow: '0 0 40px rgba(139,92,246,0.6)' },
        },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
