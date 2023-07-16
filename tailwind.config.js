/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [],
  theme: {
    extend: {
      maxWidth: {
        mcard: '1280px',
      },
    },
  },
  plugins: [],
};
