module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'blue-light': '#fbfbff',
      'gray-light': '#d3dce6',
      'silver-light': '#f6f6f6',
      'gray-dark': '#273444',
      white: '#ffffff',
      black: '#2a2324',
      gray: '#c3c3c3',
      blue: '#3c6cdc',
      violet: '#9997ef',
      orange: '#f47865',
      green: '#13ce66',
      yellow: '#ffc82c'
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  }
};
