import React from "react";

const CarPlate = ({car}) => {
  
  return (
    <div className="flex items-center border border-gray-500 rounded-md p-2 w-60 text-gray">
      <div className="w-12 text-center font-bold text-lg">{car.code}</div>
      <div className="flex-grow text-center font-medium text-xl border-l-2 border-gray-500">
        {car.number}
      </div>
      <div className="flex flex-col items-center">
        <img src={car.flag} alt={`${car.CarPlatecountry} flag`} className="w-8 h-5" />
        <span className="text-xs ">{car.country}</span>
      </div>
    </div>
  );
};

export default CarPlate;
