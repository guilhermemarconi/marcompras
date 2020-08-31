import { createGlobalStyle } from 'styled-components';

import { colors, fonts } from './variables';

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* custom */
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    display: flex;
    min-height: 100vh;
    font-family: ${fonts.family};
    flex-direction: column;
  }
  h1 {
    font-family: ${fonts.family};
    font-size: ${fonts.size.lg};
    font-weight: ${fonts.weight.bold};
  }
  img {
    display: block;
  }
  a {
    color: ${colors.secondary}
  }
  #root {
    display: flex;
    width: 100%;
    flex-direction: column;
    flex: 1;
  }
`;

export default GlobalStyles;
