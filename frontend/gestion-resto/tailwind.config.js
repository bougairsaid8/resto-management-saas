/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        border: 'var(--border)',
        background: 'var(--background)',
        surface: 'var(--surface)',
        success: 'var(--success)',
        danger: 'var(--danger)',
      },
      boxShadow: {
        'custom': 'var(--shadow)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}