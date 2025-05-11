// eslint-disable-next-line react/prop-types
export function CountryInfo({ name, flag, capital, population, continent, language }) {
  return (
    <>
      <div className="col-span-1 row-span-2 flex flex-col items-center place-content-center">
        <div
          className="group flex flex-col items-center place-content-center w-4/5 h-4/5 bg-black shadow-xl rounded-3xl duration-700 bg-opacity-20 cursor-cell
          hover:w-full hover:h-full hover:z-10 hover:duration-500 hover:bg-opacity-40 hover:text-gray-200 hover:text-5xl">
            <h1 
              className="mx-h-1/2 px-4 text-center text-xl uppercase mb-10 
                group-hover:text-3xl duration-300 duration-500">
              Name
            </h1>
            <h1 
              className="mx-h-1/2 px-4 text-center text-4xl mt-5 tracking-tight
                group-hover:text-6xl group-hover:block duration-500">
              {name}
            </h1>
        </div>
      </div>
      <div className="col-span-1 row-span-2 flex flex-col items-center place-content-center">
        <div
          className="group flex flex-col items-center place-content-center w-4/5 h-4/5 bg-black shadow-xl rounded-3xl duration-700 bg-opacity-20 cursor-cell
          hover:w-full hover:h-full hover:z-10 hover:duration-500 hover:bg-opacity-40 hover:text-gray-200 hover:text-5xl">
            <img
              alt="Loading..."
              src={flag}
              className="w-4/5 h-4/5 opacity-60 rounded-xl
                group-hover:opacity-90 duration-500" />
        </div>
      </div>
      <div className="col-span-1 row-span-2 flex flex-col items-center place-content-center">
        <div
          className="group flex flex-col items-center place-content-center w-4/5 h-4/5 bg-black shadow-xl rounded-3xl duration-700 bg-opacity-20 cursor-cell
          hover:w-full hover:h-full hover:z-10 hover:duration-500 hover:bg-opacity-40 hover:text-gray-200 hover:text-5xl">
            <h1
              className="max-h-1/2 px-4 text-center text-xl uppercase mb-10 
                group-hover:text-3xl duration-300 duration-500">
              Capital
            </h1>
            <h1
              className="max-h-1/2 px-4 text-center text-4xl mt-5 tracking-tight
                group-hover:text-6xl duration-300 duration-500">
              {capital}
            </h1>
        </div>
      </div>
      <div className="col-span-1 row-span-2 flex flex-col items-center place-content-center">
        <div
          className="group flex flex-col items-center place-content-center w-4/5 h-4/5 bg-black shadow-xl rounded-3xl duration-700 bg-opacity-20 cursor-cell
          hover:w-full hover:h-full hover:z-10 hover:duration-500 hover:bg-opacity-40 hover:text-gray-200 hover:text-5xl">
            <h1
              className="max-h-1/2 px-4 text-center text-xl uppercase mb-10 
                group-hover:text-3xl duration-300 duration-500">
              Population
            </h1>
            <h1
              className="max-h-1/2 px-4 text-center text-4xl mt-5 tracking-tight
                group-hover:text-6xl duration-300 duration-500">
              {population}
            </h1>
        </div>
      </div>
      <div className="col-span-1 row-span-2 flex flex-col items-center place-content-center">
        <div
          className="group flex flex-col items-center place-content-center w-4/5 h-4/5 bg-black shadow-xl rounded-3xl duration-700 bg-opacity-20 cursor-cell
          hover:w-full hover:h-full hover:z-10 hover:duration-500 hover:bg-opacity-40 hover:text-gray-200 hover:text-5xl">
            <h1
              className="max-h-1/2 px-4 text-center text-xl uppercase mb-10 
                group-hover:text-3xl duration-300 duration-500">
              Continent
            </h1>
            <h1
              className="max-h-1/2 px-4 text-center text-4xl mt-5 tracking-tight
                group-hover:text-6xl duration-300 duration-500">
              {continent}
            </h1>
        </div>
      </div>
      <div className="col-span-1 row-span-2 flex flex-col items-center place-content-center">
        <div
          className="group flex flex-col items-center place-content-center w-4/5 h-4/5 bg-black shadow-xl rounded-3xl duration-700 bg-opacity-20 cursor-cell
          hover:w-full hover:h-full hover:z-10 hover:duration-500 hover:bg-opacity-40 hover:text-gray-200 hover:text-5xl">
            <h1
              className="max-h-1/2 px-4 text-center text-xl uppercase mb-10 
                group-hover:text-3xl duration-300 duration-500">
              Language
            </h1>
            <h1
              className="max-h-1/2 px-4 text-center text-4xl mt-5 tracking-tight
                group-hover:text-6xl duration-300 duration-500">
              {language}
            </h1>
        </div>
      </div>
    </>
  )
}