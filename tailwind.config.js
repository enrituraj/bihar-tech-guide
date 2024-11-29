/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React component paths
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '96rem', // 1536px
        '9xl': '112rem', // 1792px
      },
    },
    
  },
  plugins: [],
}
