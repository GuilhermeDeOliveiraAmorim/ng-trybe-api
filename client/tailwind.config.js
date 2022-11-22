/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      backgroundImage: {
        waves: "url('/bg-waves.jpg')",
        ng: "url('/bg-ng.png')",
      },
      colors: {
        "black-900": "#212529",
        "black-800": "#343A40",
        "black-700": "#495057",
        "black-600": "#6C757D",
        "black-500": "#ADB5BD",
        "black-400": "#CED4DA",
        "black-300": "#DEE2E6",
        "black-200": "#E9ECEF",
        "black-100": "#F8F9FA",
        "ng-purple": "#7431f4",
        "ng-fuxia": "#ff00ff",
        "ng-green": "#00d700",
      },
    },
  },
  plugins: [],
};
