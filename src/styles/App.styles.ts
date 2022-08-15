import styled from 'styled-components';

export const Main = styled.main`
width:100%;
max-width:500px;
padding:20px;
`

export const Title = styled.h1`
color:var(--white);
text-transform:uppercase;
text-align:center;
margin-bottom:20px;
`

export const WrapperInput = styled.form`
width:100%;
display:flex;
margin-bottom:20px;
`

export const Box = styled.div`
  width:100%;
  background: rgba(33, 91, 240, 0.1);
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #4b4b54;
`

export const TitleSearch = styled.h2`
  font-size:28px;
  color:var(--white);
  text-align:center;
  margin:0 0 20px 0 ;
`

export const Subtitle = styled.p`
  color:var(--blue);
  margin:0 0 10px 0 ;
`

export const Text = styled.p`
  color:var(--white);
  font-size:28px;

  span{
    font-size:16px;
  }
`

export const Flex = styled.div`
  display:flex;
  justify-content:space-between;
`

export const Colum = styled.div`
  width:45%;
  text-align:center;
`

export const AirWind = styled.div` 
  width: 50px;
  height: 50px;
  border: 1px solid var(--white);
  border-radius: 50%;
  margin: 30px auto;
  padding-left: 25px;
  padding-top: 25px;
`

export const PointWind = styled.div`
  width: 15px;
  height: 1px;
  background-color: var(--white);
  transform-origin: left;
`
