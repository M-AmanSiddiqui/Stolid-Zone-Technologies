/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure this path is correct
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this includes all files where you use Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
