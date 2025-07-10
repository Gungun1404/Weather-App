import React from 'react'

export default function Weathercard({city}) {

  return (
      <div className="text-center mb-6">
      <h2 className="text-2xl font-semibold">{city.name}</h2>
      <p className="text-sm text-gray-500">Tuesday, 12 PM</p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="text-6xl"></div>
        <div>
          <h3 className="text-5xl font-bold">{city.main.temp}°C</h3>
          <p className="text-lg text-gray-600">{city.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}
