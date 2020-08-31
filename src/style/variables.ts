import { pxToRem, rgba, fluidType } from './functions';

export const spaces = {
  sm: pxToRem(10),
  md: pxToRem(20),
  lg: pxToRem(30),
  xl: pxToRem(40),
};

export const colors = {
  primary: `#000000`,
  secondary: `#2B2B71`,
  success: `#19965F`,
  error: `#D90D1A`,
  alert: `#EEDD22`,
  border: `#CCCCCC`,
  overlay: rgba('#000000', 0.75),
};

export const fonts = {
  family: `--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  size: {
    xs: fluidType({ 320: 12, 1920: 16 }),
    sm: fluidType({ 320: 14, 1920: 18 }),
    md: fluidType({ 320: 16, 1920: 20 }),
    lg: fluidType({ 320: 20, 1920: 42 }),
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export const zIndex = {
  minimum: 1,
  medium: 2,
  maximum: 3,
  omg: 4,
};

export const breakpoints = {
  mobile: `max-width: 599px`,
  tabletPortrait: `min-width: 600px`,
  tabletLandscape: `min-width: 900px`,
  desktop: `min-width: 1200px`,
  desktopLarge: `min-width: 1800px`,
};

export const transitions = {
  default: `all 0.3s ease`,
  easing: `ease`,
  speed: {
    slow: `0.6s`,
    normal: `0.3s`,
    fast: `0.15s`,
  },
};
