import { createGlobalStyle } from "styled-components";
import {
  BREAKPOINT,
  COLOR_BASE_2,
  FONT_CONDENSED_DESKTOP,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
  FONT_WEIGHT_BOLD,
} from "./Constants";

const GlobalStyles = createGlobalStyle`

body {
box-sizing: border-box;
outline: 0;
margin: 0;
padding: 0;
border: 0;
background-color: ${COLOR_BASE_2};
}

blockquote {
  margin:0;
  padding: 8px 0 8px 10px;
  border-left: 5px solid red;
}

body {
  ${FONT_DEFAULT_DESKTOP}
  -webkit-font-smoothing: antialiased;
  text-align: left;
}

// HEADINGS

h1,
h2,
h3 {
  ${FONT_CONDENSED_DESKTOP};
  margin-top: 0;
  margin-bottom: 0.4em;
  text-align: left;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0.6em;
}

// TEXT

p {
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_MOBILE}
  }
}


b {
  font-weight: ${FONT_WEIGHT_BOLD};
  // color: gold;
}

a {
  text-decoration: none;
}

ul {
  margin-left: 0;
  padding-left: 0px;
  list-style: square inside;
}

li {
  @media (min-width: ${BREAKPOINT}px) {
    padding: 8px 0;
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 5px 0;
  }
}

@font-face {
  font-family: "Roboto Condensed";
  src: url("/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto Condensed Light";
  src: url("/fonts/Roboto_Condensed/RobotoCondensed-Light.ttf") format("truetype");
  font-display: swap;
}


@font-face {
  font-family: "Roboto";
  src: url("/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}



@font-face {
  font-family: "Roboto Condensed";
  src: url("/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}



`;
export default GlobalStyles;
