import React, {useState} from 'react';
import * as C from './styles/App.styles';
import {WeatherType} from './types/weather';
import { Loading } from './components/Loading';
import {TextInput} from './components/TextInput';
import {Button} from './components/Button'
const App = () => {
  const [weather, setWeather] = useState<WeatherType>();
  const [location, setLocatiton] = useState<String>('')
  const [loading, setLoading] = useState<Boolean>(false);
  const [showInfo, setShowInfo] = useState<Boolean>(false);

  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocatiton(event.target.value);
  }

  const clearLocation = () => {
    if(location.length <= 1){
      setLoading(false);
      setShowInfo(false);
    }
  }

  const loadWeather = async (event:React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      if(location.length >= 2) {
        setLoading(true);
        setShowInfo(true);
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=pt_br&appid=de388244ac5a52a1b0c8948dcf2134d8`);
        let json = await response.json();
        setWeather(json);
      } else{
        clearLocation();
      }
    } catch (error) {
      setLoading(false);
      console.log("erro", error);
    } finally{
      setLoading(false);
    }
  };

  return(
    <C.Main>
      <C.Title>Clima Tempo</C.Title>
      <C.WrapperInput>
        <TextInput type='text' placeholder='Digite uma cidade ou estado' onChange={handleLocation} />
        <Button onClick={loadWeather}>Buscar</Button>
      </C.WrapperInput>
      {loading && <Loading />}

      {(!loading && weather?.cod === 200 && showInfo === true) && 
      <C.Box>
        <C.TitleSearch>{weather.name}, {weather.sys.country}</C.TitleSearch>
        <C.Flex>
        <C.Colum>
          <C.Subtitle>Temperatura</C.Subtitle>
          <C.Text>{weather.main.temp.toFixed(0)}<sup>°C</sup></C.Text>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`} alt={weather.weather[0].description} />
          <C.Text><span>{weather.weather[0].description}</span></C.Text>
        </C.Colum>
        <C.Colum>
          <C.Subtitle>Vento</C.Subtitle>
          <C.Text>{weather.wind.speed} <span>km/h</span></C.Text>
          <C.AirWind>
                    <C.PointWind  style={{transform: `rotate(${weather.wind.deg}deg)`}}></C.PointWind>
                </C.AirWind>
        </C.Colum>
        </C.Flex>
     </C.Box>
     }
      {((weather?.cod === "404" || weather?.cod === "400") && showInfo === true)  && <C.TitleSearch>Cidade/Estado não encontrado</C.TitleSearch>}
      
    </C.Main>
  )
}
export default App;