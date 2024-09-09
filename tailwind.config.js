/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'start-pattern': "url('/images/startpagebackground.webp')",
        'start-pattern-mob': "url('/images/startpagebackgroundmobile.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
