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

  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocatiton(event.target.value);
  }

  const loadWeather = async () => {
    try {
      if(location.length >= 3) {
        setLoading(true);
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang="pt_br"&appid=`);
        let json = await response.json();
        setWeather(json);
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
        <TextInput type='text' placeholder='Digite cidade ou estado' onChange={handleLocation} />
        <Button onClick={loadWeather}>Buscar</Button>
      </C.WrapperInput>
      {loading && <Loading />}

      {(!loading && weather?.cod === 200) && 
      <div>
        <h3 style={{color:"white"}}>{weather?.name} {weather?.sys?.country} </h3> 
        <p style={{color:"white"}}> Temperatura: {weather?.main?.temp.toFixed(0)}<sup>°C</sup></p>  
     </div>
     }
      {(weather?.cod === "404" || weather?.cod === "400")  && <p style={{color:"white"}}>Cidade não encontrada</p>}
      
    </C.Main>
  )
}
export default App;