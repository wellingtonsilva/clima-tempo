import styled from "styled-components";

export const Button = styled.button`
border:0;
background: var(--blue);
padding:5px 15px;
color:var(--white);
cursor:pointer;
font-weight:300;
font-size:18px;
border-radius: 0 5px 5px 0;
font-family: 'Roboto', sans-serif;
&:hover {
  background: #1d4ecb;
}
`