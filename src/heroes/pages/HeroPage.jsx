import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const hero = useMemo( () => getHeroById( id ), [ id ] )

  const onNavigateBack = () => {
    navigate(-1)
  }
 
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="grid grid-cols-2 gap-14 py-12 animate__animated animate__backInUp">
      <div className="col-span-1">
        <img
          src={`/src/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="w-full"
        />
      </div>

      <div className="col-span-1 font-roboto text-white">
        <h3 className="text-center py-6 text-5xl font-semibold">
          {hero.superhero}
        </h3>

        <dl className="max-w-md divide-y text-white divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 md:text-lg text-gray-400">
              Alter Ego:
            </dt>
            <dd className="text-lg font-semibold">{hero.alter_ego}</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 md:text-lg text-gray-400">
              Publisher:
            </dt>
            <dd className="text-lg font-semibold">{hero.publisher}</dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 md:text-lg text-gray-400">
              First Appearance:
            </dt>
            <dd className="text-lg font-semibold">{hero.first_appearance}</dd>
          </div>
        </dl>

        <h5 className="mt-10 text-2xl">Characters</h5>
        <p className="mt-2">{hero.characters}</p>

        <button className="relative inline-flex items-center justify-center p-0.5 my-4 -mx-0.5 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-green-200 ring-green-800" onClick={ onNavigateBack }>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Regresar
          </span>
        </button>
      </div>
    </div>
  );
};
