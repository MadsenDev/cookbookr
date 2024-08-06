/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B', // Coral Red
        'primary-light': '#FF8C8C',
        secondary: '#FFD93D', // Bright Yellow
        'secondary-light': '#FFE066',
        background: '#FFF5E1', // Light Cream
        accent: '#FF9F1C', // Vibrant Orange
        'accent-light': '#FFB44D',
        text: '#333333', // Dark Gray
        muted: '#6B7280', // Muted Gray
        'muted-light': '#8990A0',
        light: '#F3F4F6', // Light Gray
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      spacing: {
        '0': '0px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};