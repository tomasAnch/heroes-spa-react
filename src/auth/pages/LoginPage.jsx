import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login( 'Tomas Anchorena' )

    navigate( lastPath, {
      replace: true,
    });
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-gray-700">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center font-roboto">
          <h1 className="text-2xl font-bold sm:text-3xl text-gray-300">
            Login to see your favorite Heroes!
          </h1>
          <button
            className="group relative inline-block focus:outline-none focus:ring my-12"
            onClick={ onLogin }
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-gray-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

            <span className="text-black relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
              Login
            </span>
          </button>
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Heroes Login"
          src="https://wallpapercave.com/wp/G5HNZDV.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};
