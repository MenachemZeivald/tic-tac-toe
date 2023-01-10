import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --yellow: #FFE45E;
    --white: #d9ddef;
    --pink: #FF6392;
    --blue: #7FC8F8;
    --Dblue: #4f92c5;
}

body {
    margin: 0;
    background: var(--blue);
    font-family: 'Fredoka One', cursive;
    height: 100%;
    overflow: hidden;
}

*:lang(he) {
  font-family: 'Suez One', serif;
}

* {
  text-decoration: none;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 700,
  'GRAD' 25,
  'opsz' 48
}`

export default GlobalStyle