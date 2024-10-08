import { createGlobalStyle } from 'styled-components';
import COLORS from '../colors';

export const GlobalStyles = createGlobalStyle`

// SF PRO

@font-face {
  font-family: 'San Francisco Pro Display';
  font-weight: 400;
  src: url(/assets/fonts/sf-pro-display_regular.woff2) format('woff2');
}
@font-face {
  font-family: 'San Francisco Pro Display';
  font-weight: 600;
  src: url(/assets/fonts/sf-pro-display_semibold.woff2) format('woff2');
}
@font-face {
  font-family: 'San Francisco Pro Display';
  font-weight: 700;
  src: url(/assets/fonts/sf-pro-display_bold.woff2) format('woff2');
}

// OGG

@font-face {
  font-family: 'Ogg Text';
  font-weight: 200;
  font-style: normal;
  src: url(/assets/fonts/ogg-Thin.otf) format('opentype');
}
@font-face {
  font-family: 'Ogg Text';
  font-weight: 300;
  font-style: normal;
  src: url(/assets/fonts/ogg-Light.otf) format('opentype');
}
@font-face {
  font-family: 'Ogg Text';
  font-weight: 400;
  font-style: normal;
  src: url(/assets/fonts/ogg-Regular.otf) format('opentype');
}
@font-face {
  font-family: 'Ogg Text';
  font-weight: 500;
  font-style: normal;
  src: url(/assets/fonts/ogg-Medium.otf) format('opentype');
}
@font-face {
  font-family: 'Ogg Text';
  font-weight: 600;
  font-style: normal;
  src: url(/assets/fonts/ogg-Bold.otf) format('opentype');
}


* {
  -moz-osx-font-smoothing: grayscale; /*(For Firefox)*/
  -webkit-font-smoothing: antialiased; /*(For Chrome and Safari)*/
  font-family: 'San Francisco Pro Display', Helvetica, Arial, sans-serif;
  font-display: swap;
  margin: 0;
  padding: 0;
  text-decoration: none;
  transition: all ease 0.3s;
}

body {
  background: ${COLORS.white_cloud};
}

/* Headlines */

h1, h2, h3, h4, h5, h6 {
  color: ${COLORS.green_dark};
  font-weight: 600;
  /* @media (prefers-color-scheme: dark) {
    color: ${COLORS.white_cloud};
  } */
}

h1 {
  font-family: 'Ogg Text';
  font-size: 64px;
  line-height: 80px;
}

h2 {
  font-size: 48px;
  line-height: 60px;
}

h3 {
  font-size: 40px;
  line-height: 52px;
}

h4 {
  font-size: 32px;
  line-height: 40px;
}

h5 {
  font-size: 24px;
  line-height: 32px;
}

h6 {
  font-size: 20px;
  line-height: 28px;
}

@media screen and (max-width: 724px) {
  h1 {
    font-size: 40px;
    line-height: 52px;
  }
  
  h2 {
    font-size: 36px;
    line-height: 48px;
  }
  
  h3 {
    font-size: 32px;
    line-height: 40px;
  }

  h4 {
    font-size: 24px;
    line-height: 32px;
  }
  
  h5 {
    font-size: 20px;
    line-height: 28px;
  }
  
  h6 {
    font-size: 16px;
    line-height: 24px;
  }
}

/* Paragraphs */
p, li {
  color: ${COLORS.green_dark};
}

.semibold {
  font-weight: 600;
}

.text-huge {
  font-size: 24px;
  line-height: 32px;
}

.text-large {
  font-size: 20px;
  line-height: 28px;
}

.text-medium {
  font-size: 16px;
  line-height: 24px;
}

.text-small {
  font-size: 14px;
  line-height: 20px;
}

.text-caption {
  font-size: 12px;
  line-height: 16px;
}

p > a, li > a {
  color: ${COLORS.green_vibrant};
  text-decoration-style: dotted;
  text-decoration-line: underline;
  text-decoration-color: ${COLORS.green_pale};
  &:hover {
    color: ${COLORS.green_pale};
  }
}
`;
