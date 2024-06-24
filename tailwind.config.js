/** / @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const mode = "jit";
export const variants = {
  backgroundColor: ['responsive', 'hover', 'focus', 'even', 'odd'],
};
export const theme = {
  extend: {
    backgroundColor: ['active'],
    backgroundImage: theme => ({
      'gradient-linear': 'linear-gradient(87deg, rgba(27,122,139,1) 0%, rgba(27,122,139,1) 8%, rgba(109,194,203,1) 100%)',
      }),
    colors: {
      primaryColor: "#0067FF",
      yellowColor: "#FEB60D",
      purpleColor: "#9771FF",
      irisBlueColor: "#0DB1E2",
      headingColor: "#181A1E",
      textColor: "#4E545F",
      darkGreen1: "#003C43",
      darkGreen2: "#135d66",
      darkGreen3: "#77B0AA",
      darkGreen4: "#1b7a8b",
      creme: "#dfebfaff",
      creme2: "#eff2f9",
      cremeHover: "#c9e5e8",
      greenHover: "#0E484F",
      searchBarGrey: "#EFEFF0",
      superLightGreen: "#E3FEF7",
      writingGrey: "#8b8e93",
      superLightGreenBackground: "#c7f8eb",
    },
    boxShadow: {
      panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      hardShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
    },
    borderRadius: {
      50: "50px",
      20: "20px",
      "out-1": "-10px",
      "out-2": "-20px",
      "out-3": "-30px",
    },
    borderWidth: {
      3: "3px",
      1: "1px"
    },
    fontFamily: {
      'rubik': ["Rubik", "sans-serif"],
      'roboto': ["Roboto", "sans-serif"],
      'rubikBubbles': ['"Rubik Bubbles"', "system-ui"],
      'poppins': ['Poppins', 'sans-serif'],
    },
    boxShadow: {
      panelShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      hardShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
    },
    fontSize: {
      20: "20px",
    },
    fontWeight: {
      450: "450",
    },
    backdropBlur: {
        'custom': '124px'
    }
  },
};
export const plugins = [];

