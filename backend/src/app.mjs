import commaNumber from "comma-number";

export async function processRequest(country) {
  let countryData = {}
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    if(!response.ok) {
      throw new Error (`Error: ${response.status}`)
    }
    const data = await response.json();
    countryData.name = data[0].name.common;
    countryData.flag = data[0].flags.svg;
    countryData.capital = data[0].capital[0];
    countryData.population = commaNumber(data[0].population);
    countryData.continent = data[0].continents[0];
    countryData.language = Object.values(data[0].languages)[0];
    return countryData
  } catch (e) {
    throw e;
  }
}