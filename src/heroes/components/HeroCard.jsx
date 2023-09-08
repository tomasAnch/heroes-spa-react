import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  if(alter_ego === characters) return (<></>);
  return <p className="mb-2 font-normal text-gray-400">{characters}</p>
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const heroImageUrl = `src/assets/heroes/${ id }.jpg`

  return (
    <div className="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 animate__animated animate__fadeIn">
      <img className="rounded-t-lg" src={ heroImageUrl } alt={ superhero } />
      <div className="p-5 font-roboto">      
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-white">
          { superhero }
        </h5>
        <p className="mb-2 font-normal text-gray-400">
          { alter_ego }
        </p>
        
        {/* {
          (alter_ego !== characters) && (<p className="mb-2 font-normal text-gray-400">{ characters }</p>)
        } */}

        <CharactersByHero characters={characters} alter_ego={alter_ego} />


        <p className="mt-6 mb-2 font-normal text-gray-400">
          <small>{first_appearance}</small>
        </p>
        <Link
          to={`/hero/${ id }`}
          className="inline-flex items-center px-4 py-3 text-sm font-medium text-center -ml-1.5 text-white rounded-lg focus:ring-4 focus:outline-none bg-black hover:bg-gray-600"
        >
          Más información..
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
