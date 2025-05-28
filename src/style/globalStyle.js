import { createGlobalStyle } from "styled-components";

// ESTILO GLOBAL DA PÁGINA
const GlobalStyle = createGlobalStyle `


* {
    margin: 0;
    padding: 0;
    
  }

  html, body {
    max-width: 100%;
    overflow-x: hidden; //impede rolagem horizontal em qualquer tipo de tela
  } 







`;
 export default GlobalStyle;