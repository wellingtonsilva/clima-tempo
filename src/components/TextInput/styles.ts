import styled from "styled-components";

export const TextInput = styled.input`
  width:100%;
  text-align:left;
  background:#fff;
  padding:15px;
  font-size:20px;
  color:#333;
  border-radius: 5px 0 0 5px;
  border:0;
  outline:none;

  &:focus{
    box-shadow: 0px 0px 10px var(--blue);
  }
`