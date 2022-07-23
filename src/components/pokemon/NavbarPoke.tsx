import React from "react";
import { Link } from "react-router-dom";

const NavbarPoke = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(0);
  return (
    <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://img.icons8.com/ios/50/000000/pokemon-go.png"
            className="h-10 inverse-color"
            alt="pokemon-go"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Pokemon API
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className={
                  isClicked === 1
                    ? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                onClick={() => setIsClicked(1)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={
                  isClicked === 2
                    ? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                onClick={() => setIsClicked(2)}
              >
                Search Pokemon
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={
                  isClicked === 3
                    ? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                onClick={() => setIsClicked(3)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={!isOpen ? "hidden" : "laptop:pr-10 laptop:-mt-[20px]"}>
        <div className="flex justify-end laptop:pt-1 laptop:m-0 pt-4 -mr-4">
          <div
            className="laptop:w-[200px] p-4 w-screen text-center rounded-lg
            bg-white border-2 border-white border-opacity-60
           font-bold text-red-500 shadow-lg
           text-xl absolute bg-opacity-100"
          >
            <ol>
              <li className="pb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="pb-2">
                <Link to="#">Search Pokemon</Link>
              </li>
              <li className="pb-2">
                <Link to="#">About</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPoke;
