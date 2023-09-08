import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return(
    <>
      <div className="py-10 mx-auto font-poppins">
        <div className="flex justify-center items-center">
          <h1 className="pb-10 text-5xl font-bold text-white">Marvel Characters</h1>
        </div>
        <HeroList publisher='Marvel Comics' />
      </div>
    </>
  )
}