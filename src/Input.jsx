import React, { useState } from 'react'

export default function Input({setSearch}) {
 

  const [inputValue , setInputValue] = useState('');

  const handleInputValue = (event)=>{
         setInputValue(event.target.value);
  }
    const cityName = ()=>{
      setSearch(inputValue);
    }

    const keyPress = (event)=>{
             if(event.key === 'Enter'){
            cityName();
           }
    }

  return (
     <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Enter city"
        className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={inputValue}
        onChange={handleInputValue}
        onKeyUp={keyPress}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
      onClick={cityName}>
        Search
      </button>
    </div>
  )
}

