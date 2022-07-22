import React from "react";

const NavbarPoke = () => {
  const [selected, setSelected] = React.useState(false);
  return (
    <div className="z-10">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            src="https://img.icons8.com/ios/50/000000/pokemon-go.png"
            className="h-10"
            alt="pokemon-go"
          />
          <h1 className="text-2xl font-bold ml-2">Pokédex</h1>
        </div>
        <div className="" onClick={() => setSelected(!selected)}>
          <img
            src="https://img.icons8.com/ios/50/000000/menu.png"
            className="h-10"
            alt="menu"
          />
        </div>
      </div>
      <div className={!selected ? "hidden" : "laptop:pr-10 laptop:-mt-[20px]"}>
        <div className="flex justify-end laptop:pt-1 laptop:m-0 pt-4 -mr-4">
          <div
            className="laptop:w-[200px] p-4 w-screen text-center rounded-lg
            bg-white border-2 border-white border-opacity-60
           font-bold text-red-500 shadow-lg
           text-xl absolute bg-opacity-60"
          >
            <ol>
              <li className="pb-2">About</li>
              <li className="pb-2">Contact</li>
              <li>Poke</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPoke;
