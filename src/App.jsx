import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherComponents/WeatherInformations'

function App() {
  const [weather, setWeather] = useState() /*esse set guarda a informaçao dentro de weather*/
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "f1d52a89ee5bd00803e6b586b5931674"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
  }

  return (
    <div className='container'>
      <h1>DEVclub Previsao do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
      
      {weather && <WeatherInformations weather={weather}/>}
    </div>  
  )
}

export default App