import React, { useEffect, useState } from 'react'
import Titel from './Titel'
import Input from './Input'
import Weathercard from './Weathercard'
import Card from './Card'
import axios from 'axios'

export default function App() {

    const [city , setCity] = useState(null)
  const [search , setSearch] = useState('')

  const api_key = "21805bff7224936fa25d6cec016a0a4b";

  const getWeather = ()=>{
   if (search != '' ){
       const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`

      axios.get(weather_url).then(
      (success)=>{
            setCity(success.data);
            console.log(success.data);
      }
   ).catch(
      (error)=>{
               console.log(error)
      }
   )}
  }

  useEffect(
   ()=>{
      getWeather()
   },[search]
  )

  return (
     <>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-200 text-gray-900 font-sans p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        < Titel/>
     < Input  setSearch={setSearch} />
     {city && <Weathercard city={city}/>}
     {city === null && <Card/>}
      </div>
     </div>
     </>
  )
}





