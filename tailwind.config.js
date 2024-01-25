/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '0px', 'max': '800px'},  
        'md': {'min': '0px', 'max': '600px'},  
        'lg1': {'min': '600px', 'max': '880px'}, 
        'lg2': {'min': '800px', 'max': '880px'},  
         'lg':{"max": '1024px'},
      },
      width:{max:"90%", sm:"20%", md:"80%",xsm:"25px"},
      colors:{primary:"hsl(0, 0%, 63%)", secondary:" hsl(0, 0%, 27%)"}, 
      height:{sm:"50%",min:"30%", xsm:"3px", max:"70%"}
    },
  },
  plugins: [],
}