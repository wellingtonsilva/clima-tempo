import React, {useState} from 'react';
import * as C from './assets/styles/App.styles';
import {WeatherType} from './types/weather';
import { Loading } from './components/Loading';
import {TextInput} from './components/TextInput';
import {Button} from './components/Button';
import iconLocation from './assets/icons/icon-location.svg';
import {formatData} from './utils/functions'
import  Map  from './components/Map' 
import countries from './helpers/countries'
const App = () => {
  const [weather, setWeather] = useState<WeatherType>();
  const [location, setLocatiton] = useState<String>('')
  const [loading, setLoading] = useState<Boolean>(false);
  const [showInfo, setShowInfo] = useState<Boolean>(false);

  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocatiton(event.target.value.trim());
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
      
        <C.Flex>
        <C.ColumLeft>
          <div>
            <C.Text> {formatData()}</C.Text>
            <C.TextCity> <img src={iconLocation} alt="Icon" />  {weather.name}, {countries[weather.sys.country.trim()] }</C.TextCity>
          </div>
          <div style={{marginTop:'20px'}}>
            <img style={{marginLeft:'-20px', marginBottom:'-20px'}} src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`} alt={weather.weather[0].description} />
            <C.WeatherTemp>{weather.main.temp.toFixed(0)}°C</C.WeatherTemp>
            <C.WeatherDesc>{weather.weather[0].description}</C.WeatherDesc>
          </div>
        </C.ColumLeft>
        <C.ColumRight>
          <C.Flex>
            <C.TitleProp>Temp Máxima: </C.TitleProp>
            <C.Value>{weather.main.temp_max.toFixed(0)}°C</C.Value>
          </C.Flex>

          <C.Flex>
            <C.TitleProp>Temp Mínima: </C.TitleProp>
            <C.Value>{weather.main.temp_min.toFixed(0)}°C</C.Value>
          </C.Flex>

          <C.Flex>
            <C.TitleProp>Sensação Térmica: </C.TitleProp>
            <C.Value>{weather.main.feels_like.toFixed(0)}°C</C.Value>
          </C.Flex>

          <C.Flex>
            <C.TitleProp>Vento: </C.TitleProp>
            <C.Value>{weather.wind.speed} km/h</C.Value>
          </C.Flex>

          <C.Flex>
            <C.TitleProp>Umidade: </C.TitleProp>
            <C.Value>{weather.main.humidity}%</C.Value>
          </C.Flex>

          <C.Flex>
            <C.TitleProp>Pressão Atmosférica: </C.TitleProp>
            <C.Value>{weather.main.pressure}</C.Value>
          </C.Flex>
          
          <C.AirWind>
            <C.PointWind  style={{transform: `rotate(${weather.wind.deg}deg)`}}></C.PointWind>
          </C.AirWind>
        </C.ColumRight>

        <Map lat={weather.coord.lat} lon={weather.coord.lon} />

        </C.Flex>
     </C.Box>
     }
      {((weather?.cod === "404" || weather?.cod === "400") && showInfo === true)  && <C.TitleSearch>Cidade/Estado não encontrado</C.TitleSearch>}

    </C.Main>
  )
}
export default App;