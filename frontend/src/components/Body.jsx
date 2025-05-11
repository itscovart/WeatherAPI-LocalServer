import { useState } from "react"
import { createRoot } from "react-dom/client";
import { CountryInfo } from "./CountryInfo.jsx";

export function Body() {
  const [ backendData, setBackendData ] = useState("")
  const sendRequest =  () => {
    fetch(`http://localhost:3000/submit?country=${backendData}`)
    .then((response) => response.json())
    .then((data) => {
      const countryData = createRoot(document.getElementById('country-data'))
      if(data.error) {
        document.getElementById('country-data').innerHTML = '';
        alert('Make sure the name of the country is correct');   
      } else {
        countryData.render(
          <CountryInfo 
            name={data.name}
            flag={data.flag}
            capital={data.capital}
            population={data.population}
            continent={data.continent}
            language={data.language}
          />
        )
      }
      document.getElementById('input-country').value = ''
    })
  }

  return(
  <div
    className="grid grid-cols-3 grid-rows-5 mx-40 pt-0 h-4/5 p-12">
      <div 
        className="col-span-2 flex flex-col items-center place-content-center">
          <input
            type="text"
            placeholder="Write the city name down here"
            id="input-country"
            className="w-4/5 p-6 text-2xl rounded-2xl text-purple-200 bg-gray-900 bg-opacity-40"
            onChange={(e) => setBackendData(e.target.value)}/>
      </div>
    <div 
      className="col-span-1 flex flex-col items-center place-content-center">
        <button
          type="button"
          className="w-2/4 p-6 text-xl text-gray-200 rounded-2xl bg-gray-900 bg-opacity-40"
          onClick={sendRequest}>
          Search
        </button>
      </div>
      <div id="country-data" className="w-full h-full col-span-3 row-span-4 grid grid-cols-3 grid-rows-4"></div>
    </div>
  )
}