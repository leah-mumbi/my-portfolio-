/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        grayLight: {
            default: '#FFFFFF',
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
            950: '#030712',
        },
        grayDark: {
            default: '#030712',
            50: '#111827',
            100: '#1F2937',
            200: '#374151',
            300: '#4B5563',
            400: '#6B7280',
            500: '#9CA3AF',
            600: '#D1D5DB',
            700: '#E5E7EB',
            800: '#F3F4F6',
            900: '#F9FAFB',
            950: '#FFFFFF',
        },
        emerald: {
            500: '#10B981',
        }
      }
    },
  },
  plugins: [],
}