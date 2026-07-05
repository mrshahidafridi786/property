/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#2563EB",
        accent: "#10B981",
        lightGray: "#F8FAFC",
        borderGray: "#E5E7EB",
        darkText: "#111827",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        'luxury-sm': '14px',
        'luxury': '20px',
        'luxury-lg': '24px',
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
        'luxury-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.05)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
