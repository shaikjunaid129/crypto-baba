import { createTheme } from '@mui/material/styles';

// Define your custom breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

// Define your custom colors for light mode
const lightPalette = {
  primary: {
    main: '#c1c2dd', // Blue
    text: '#000000', // Dark Gray
    custom: '#898989',
  },
  secondary: {
    main: '#d2d3e5', // Pink
    text: '#000000', // Light Gray
  },
  background: {
    default: '#ccceee', // White
    paper: '#ccceee', // White
  },

  // Add a custom color for the icon in light mode
  icon: {
    main: '#000000', // Black icon color in light mode
  },
};

// Define your custom colors for dark mode
const darkPalette = {
  primary: {
    main: '#00897B', // Teal
    text: '#FFFFFF', // White
    custom: '#0ca999',
  },
  secondary: {
    main: '#0ca999', // Orange
    text: '#FFFFFF', // Light Gray
  },
  background: {
    default: '#121212', // Dark Gray
    paper: '#1E1E1E', // Darker Gray for paper surfaces
  },

  // Add a custom color for the icon in dark mode
  icon: {
    main: '#FFFFFF', // White icon color in dark mode
  },
};

const lightTheme = createTheme({
  breakpoints,
  palette: lightPalette,
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
      'Lateef',
      'serif',
      'Playpen Sans',
      'cursive',
    ].join(','),
  },
  type: 'light', // Include a type property for the theme
});

const darkTheme = createTheme({
  breakpoints,
  palette: darkPalette,
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
      'Lateef',
      'serif',
      'Playpen Sans',
      'cursive',
    ].join(','),
  },
  type: 'dark', // Include a type property for the theme
});

export { lightTheme, darkTheme };
