import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 
  *{
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }

  p{
    margin:0 ;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background:var(--dark-blue);
  }

  :root {
    --black: #0a0a0b;
    --dark-blue: #252939;
    --blue: #215bf0;
    --white: #fff;
    --gradient: linear-gradient( 135deg, #72EDF2 -22%, #5151E5 100%);
  }

`

