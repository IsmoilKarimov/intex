/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightSlate: '#d7d7d7',
        lightBlack: '464a4d',
        bgColor: '#f7f9fa',
        btnColor: '2B3D90',
        textColor: '#7A7E80',
        colorBlue: '#109EF4',
      },
      fontFamily:{}
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    }
  },
  plugins: [],
}
