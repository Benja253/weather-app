import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetApi = () => {

  const [response, setResponse] = useState(null)
  
  const success = pos => {
    const latitude = pos.coords.latitude
    const longitude = pos.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d993d119ca66d0a611399e0a7acadf4a`
    axios.get(url)
      .then(res => setResponse(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return {response}
}

export default useGetApi