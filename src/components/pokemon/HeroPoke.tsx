import React from "react";

const HeroPoke = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-red-600 laptop:text-[250px] text-6xl font-bold laptop:pt-[10%] laptop:py-0 py-10 text-shadow">
          PIKACHU
        </h1>
      </div>
      <div className="laptop:visible  invisible">
        <div className=" font-bold text-red-500 laptop:text-6xl laptop:pl-[20%] pl-12 laptop:m-0 -mt-[10%]">
          Take you pokemon
        </div>
      </div>

      <img
        src="./assets/images/algo.png"
        alt="pikachu"
        className="laptop:w-[45%] laptop:absolute laptop:-mt-[35%] laptop:ml-[35%] "
      />
    </div>
  );
};

export default HeroPoke;
