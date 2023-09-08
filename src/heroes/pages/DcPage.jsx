import { HeroList } from "../components/HeroList";

export const DcPage = () => {
  return (
    <>
      <div className="py-10 mx-auto font-poppins">
        <div className="flex justify-center items-center">
          <h1 className="pb-10 text-5xl font-bold text-white">
            DC Characters
          </h1>
        </div>
        <HeroList publisher="DC Comics" />
      </div>
    </>
  );
};
