import styled from 'styled-components';

export const Main = styled.main`
width:100%;
max-width:1000px;
padding:20px;
margin:0 auto;
`

export const Title = styled.h1`
color:var(--white);
text-transform:uppercase;
text-align:center;
margin-bottom:20px;
font-weight: 700;
`

export const WrapperInput = styled.form`
width:100%;
max-width:600px;
display:flex;
margin: 0 auto 30px;
`

export const Box = styled.section`
  width:100%;
  background: rgba(33, 91, 240, 0.1);
  border-radius: 10px;
`

export const TitleSearch = styled.h2`
  font-size:25px;
  color:var(--white);
  margin:0 0 20px 0;
  text-align:center;
`

export const Subtitle = styled.p`
  color:#c5cde1;
  margin:0 0 10px 0 ;
`

export const Text = styled.p`
  color:var(--white);
  font-size:16px;
  font-weight:300;
`
export const WeatherTemp = styled.p`
  color:var(--white);
  font-size:45px;
  font-weight:bold;
  margin-bottom:5px;
`

export const WeatherDesc = styled.p`
  color:var(--white);
  font-size:18px;
  font-weight:bold;
  text-transform: capitalize;
`

export const TextCity = styled.p`
  color:var(--white);
  font-size:25px;
  font-weight:bold;
  margin-top:15px;
`

export const Flex = styled.div`
  display:flex;
  justify-content:space-between;

  @media(max-width:768px){
        flex-direction:column;
   }
`

export const ColumLeft = styled.div`
  max-width:300px;
  width:100%;
  min-height:300px;
  background:var(--gradient);
  display:flex;
  flex-direction: column;
  border-radius:10px;
  padding: 20px 15px;
  transform: translateZ(0) scale(1.04);
  transition: transform 300ms ease;
  &:hover{
	  transform: scale(1.08) rotateY(10deg);
  }

  @media(max-width:768px){
    max-width:100%;
   }
`

export const ColumRight = styled.aside`
  max-width:300px;
  width:100%;
  flex-direction: column;
  border-radius:10px;
  padding: 15px 25px;

  div{
    margin-bottom:20px;
  }

  @media(max-width:768px){
    padding: 25px 25px 15px 15px;
    max-width:100%;
  }
`

export const TitleProp = styled.p`
  color:var(--white);
  font-weight:bold;
  font-size:16px;
`
export const Value = styled.p`
  color:var(--white);
  font-weight:300;
  font-size:16px;
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
export const GoogleMap = styled.div`
  width:100%;
  max-width:300px;
  border-radius:10px;
`