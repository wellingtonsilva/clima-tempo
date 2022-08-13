import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding:0;
}

:root {
  --black: #0a0a0b;
  --dark-blue: #252939;
  --blue: #215bf0;
  --white: #fff;
}

body {
  font-family: 'Roboto', sans-serif;
  background:var(--dark-blue);
}

#root{
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
}
`

