import useGetApi from './hooks/useGetApi'
import ChargingScreen from './components/ChargingScreen'
import WeatherCard from './components/WeatherCard'
import './weatherApp.css'
import clear from './assets/Clear.mp4'
import drizzle from './assets/Drizzle.mp4'
import rain from './assets/Rain.mp4'
import snow from './assets/Snow.mp4'
import thunderstorm from './assets/Thunderstorm.mp4'
import clouds from './assets/Clouds.mp4'

const WeatherApp = () => {
  
  const {response:objectWeather} = useGetApi()
  const mainWeather = objectWeather?.weather?.[0]?.main
  let video

  if(mainWeather === 'Drizzle'){
    video = drizzle
  } else if(mainWeather === 'Rain'){
    video = rain
  } else if(mainWeather === 'Snow'){
    video = snow
  } else if(mainWeather === 'Thunderstorm'){
    video = thunderstorm
  } else if(mainWeather === 'Clouds'){
    video = clouds
  } else {
    video = clear
  }

  return (
    <div className='App'>
      { objectWeather 
      ? 
      <div>
        <WeatherCard objectWeather={objectWeather} /> 
        <div className='absolute'>
          <video className='video' src={video} autoPlay loop />
        </div>
      </div>
      : <ChargingScreen /> }
    </div>
  )
}

export default WeatherApp