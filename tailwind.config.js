/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#FFFFFF',
          surface: '#F5F5F7',
          surfaceHover: '#E8E8ED',
          dark: '#1D1D1F',
          subtle: '#86868B',
          muted: '#A1A1A6',
          border: 'rgba(0, 0, 0, 0.08)',
          borderDark: 'rgba(255, 255, 255, 0.12)',
          accent: '#2997FF', // Apple signature blue accent
          accentHover: '#0077ED',
          card: '#FFFFFF',
          darkCard: '#161617',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['SF Mono', 'JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple-md': '0 10px 30px rgba(0, 0, 0, 0.06)',
        'apple-lg': '0 20px 40px rgba(0, 0, 0, 0.08)',
        'apple-float': '0 30px 60px rgba(0, 0, 0, 0.12)',
        'apple-glow': '0 0 50px rgba(41, 151, 255, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
