/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        
        NewsW:'url( /src/assets/images/news.jpg )',
        FoodW:'url( /src/assets/images/food.jpg )',
        RealW:'url( /src/assets/images/realestate.jpg )',
      }

    },
  },
  plugins: [],
}

