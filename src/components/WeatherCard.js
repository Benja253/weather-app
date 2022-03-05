import React, { useState } from 'react'

const WeatherCard = ({objectWeather}) => {

  const temperaturePivot = (objectWeather?.main?.temp - 273.15) * 9/5 +32

  const [temperature, setTemperature] = useState(temperaturePivot.toFixed(2))
  const [isFarenheit, setIsFarenheit] = useState(true)

  const changeGrades = () => {
    if(isFarenheit) {
      setTemperature( ((temperature - 32) * 5/9).toFixed(2) )
    } else {
      setTemperature( ((temperature * 9/5) + 32).toFixed(2) )
    }
    setIsFarenheit(!isFarenheit)
  }

  return (
    <article className='cardWheater'>
      <header className='header-card'>
        <h1 className='name-card'>Wheater App</h1>
        <p className='country-name'>{objectWeather?.name}, {objectWeather?.sys?.country}</p>
      </header>
      <div className='icon-temp-container'>
        <img className='img-weather' src={`http://openweathermap.org/img/wn/${objectWeather?.weather?.[0]?.icon}@2x.png`} alt="Wheater Icon" />
      </div>
      <section className='container-description'>
        <h2 className='title-description'>{objectWeather?.weather?.[0]?.description}</h2>
        <ul className='list-container'>
          <li className='list-item'>
            <span className='description-property'>Wind speed</span> {objectWeather?.wind?.speed} m/s
          </li>
          <li className='list-item'>
            <span className='description-property'>Clouds</span> {objectWeather?.clouds?.all}% 
          </li>
          <li className='list-item'>
            <span className='description-property'>Pressure</span> {objectWeather?.main?.pressure} hPa
          </li>
          <li className='list-item'>
            <span className='description-property'>Humidity</span> {objectWeather?.main?.humidity}%
          </li>
        </ul>
      </section>
      <div className='button-container'>
        <p className='temperature'>{ temperature } {isFarenheit ? 'ºF' : 'ºC'}</p>
        <button onClick={ changeGrades } className='button'>Change ºF / ºC</button>
      </div>
    </article>
  )
}

export default WeatherCard