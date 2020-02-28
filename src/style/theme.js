/**
 * Basic theme
 */

const palette = {
  primary: {
    contrast: 'white',
    main: '#6c2e9c',
  },
  secondary: {
    contrast: '#aaa',
    main: '#242424',
    dark: '#181818',
  },
  nav: {
    head: '#0061C9',
    body: '#007CFD',
    hover: '#0061C9',
  },
};

const baseSize = 16;

const typography = {
  baseFontSize: `${baseSize}px`,
};

const zIndex = {
  header: 10,
  overlay: 15,
  drawer: 20,
  headerText: 25,
};

export default {
  palette,
  typography,
  zIndex,
  size: size => `${size * baseSize}px`,
};
