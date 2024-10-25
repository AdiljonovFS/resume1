import React from "react";
import carAval from "../../assets/car.svg";

const CarDetails = () => {
  // if (!car) return <p>No car selected.</p>;

  return (
    <div className="p-4">
      <img
        src={carAval}
        alt="cars"
        className="w-full h-72 object-cover rounded-lg my-2"
      />

    </div>
  );
};

export default CarDetails;
