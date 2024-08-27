/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        varela: ['Varela Round', 'Arial', 'Helvetica', 'serif'],
      },
      colors: {
        c0: '#71a1ff',
        c1: '#4d85f6',
        c2: '#3b72e2',
        c3: '#336de2',
        c4: '#2151af',
        c5: '#244483',
        c6: '#103071',
      },
      filters: {
        'hue-rotate': 'hue-rotate(30deg)',
      },
      boxShadow: {
        lg: '0 4px 6px rgba(0, 0, 0, 0.1)',
        xl: '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // You can add other plugins here
  ],
};
