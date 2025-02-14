/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      screen: {
        sm: "480px",
        md: "768px",
        lg: "986px",
        xl: "1440"
      },
      extend: {},
    },
    plugins: [],
  }