/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6f0f5',
          100: '#b3d4e0',
          200: '#80b8cb',
          300: '#4d9cb6',
          400: '#1a80a1',
          500: '#0d4f5c', // Logo dark navy
          600: '#0a3f4a',
          700: '#082f38',
          800: '#051f26',
          900: '#030f14',
          950: '#0a1f2e', // Deep navy for backgrounds
        },
        teal: {
          50: '#e6f9fc',
          100: '#b3edf6',
          200: '#80e1f0',
          300: '#4dd5ea',
          400: '#22c9e0', // Logo bright teal
          500: '#1ca5c1',
          600: '#168194',
          700: '#105d67',
          800: '#0a393a',
          900: '#05151d',
        },
      },
    },
  },
  plugins: [],
}
