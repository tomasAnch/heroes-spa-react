import { HeroCard } from "./"
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react"

export const HeroList = ({ publisher }) => {

  const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] )

  return (
    <div className="grid grid-rows-1 gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {heroes.map(( hero ) => (
            <HeroCard 
              key={ hero.id }
              {...hero}
            />
          ))}
      </div>
    </div>
  )
}