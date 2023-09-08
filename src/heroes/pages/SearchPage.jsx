import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string"

import { getHeroesByName } from "../helpers/getHeroesByName";

import { HeroCard } from '../components/HeroCard'

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse( location.search )
  const heroes = getHeroesByName( q )

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    // if(searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText }`)
  }

  return (
    <div className="grid grid-cols-2 gap-14 justify-center items-center place-content-center mx-auto text-white">
      <div className="col-span-1 py-12">
        <h1 className="font-poppins font-bold text-center text-3xl">Search a Hero!</h1>

        <form className="pt-12" onSubmit={ onSearchSubmit } aria-label="form">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium sr-only text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="In which hero are you in?"
              className="block w-72 px-6 py-4 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-900 hover:bg-blue-700 focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="col-span-1 py-12 -mt-2">
        <h1 className="font-poppins font-bold text-center text-3xl">Results</h1>
        
        <div className="pt-12">
          <div className="px-6 bg-gray-700 py-4 mx-auto -mb-1.5 border rounded-lg" style={{ display: showSearch ? '' : 'none' }}>
            <p>Hero</p>
          </div>
          <div 
            aria-label="alert-error"
            className="px-6 bg-red-400 py-4 mx-auto my-4 border rounded-lg" 
            style={{ display: showError ? '' : 'none' }}
          >
            <p className="text-red-900">There's no result for { q }</p>
          </div>

          {
            heroes.map( (hero) => (
              <div className="h-full">
                <HeroCard key={hero.id} {...hero} />
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
};
