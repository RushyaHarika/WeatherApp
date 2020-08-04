import React,{useState} from 'react';
import './App.css';
import Form from './Form';
import Weather from './weather';

const App = (props) => {
  const [weather,setWeather] = useState([])
  const APIKEY = 'c1654e60cf7dd919678b91441f9a8554'

  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

      e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      .catch(err => {
  console.log(err)
      })

      if(city && country) {
      setWeather(
        {
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp * 9/5 - 459.67),
        error:""
      }
      )} else {
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          error:"Please Type A City And Country"
      }
      )}
  }

  return(
    <React.Fragment>
       
      <Form getWeather={fetchData} />
       <Weather
       description={weather.description}
      city={weather.city}
      country={weather.country}
      error={weather.error}
      temperature={weather.temperature}
      />
      {console.log(weather.data)}
    </React.Fragment>
  )
}

export default App;
