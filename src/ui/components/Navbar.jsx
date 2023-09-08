import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

export const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { user } = useContext( AuthContext )
  const { logout } = useContext( AuthContext )

  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/login', {
      replace: true
    })

    logout()
  }

  return (
    <>
      <nav className="border-gray-200 bg-gray-900 font-roboto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <Link to="/" className="flex items-center">
            <img
              src="https://seeklogo.com/images/C/captain-america-shield-logo-7A959789F1-seeklogo.com.png"
              className="h-8 mr-3"
              alt="Cap America Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Asociaciones
            </span>
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={ toggleMenu }
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="flex justify-center items-center">
            <a className="text-white" href="https://github.com/tomasAnch" target="_blank">
              { user?.name }
            </a>
          </div>

          <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <NavLink
                  to="/marvel"
                  className={ ({ isActive }) => `block py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 text-white ${ isActive ? 'text-blue-500' : '' }` }
                >
                  Marvel
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dc"
                  className={ ({ isActive }) => `block py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 text-white ${ isActive ? 'text-blue-500' : '' }` }
                >
                  DC
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/search"
                  className={ ({ isActive }) => `block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white ${ isActive ? 'text-blue-500':'' }` }
                >
                  Search
                </NavLink>
              </li>
              <li>
                <button
                  className="block py-2 pl-3 pr-4 bg-gray-950 rounded md:bg-transparent md:p-0 text-white"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
