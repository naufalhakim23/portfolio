import React from "react";

const HeroPoke = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-red-600 laptop:text-[250px] text-6xl font-bold laptop:pt-[10%] laptop:py-0 py-10 text-shadow">
          POKEMON
        </h1>
      </div>
      <div className="laptop:visible  invisible">
        <div className=" font-bold text-red-500 laptop:text-6xl laptop:pl-[20%] pl-12 laptop:m-0 -mt-[10%]">
          Take your pokemon
        </div>
      </div>
    </div>
  );
};

export default HeroPoke;
