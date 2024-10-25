import React from "react";
import BackButton from "../ui/BackButton";
import card from '../../assets/card.svg'

const CardsPage = () => {
  return (
    <div className="min-h-screen max-w-full mx-auto md:px-40 px-10 p-5 text-gray">
      <div className="text-center mb-6">
        <div className="absolute top-4 left-4">
          <BackButton /> {/* Back button */}
        </div>
        <h1 className="ml-4 text-2xl font-bold ">Kartalar</h1>
        <div></div>
      </div>

      <div className="p-4">
        {/* Add Card Section */}
        <div className="flex items-center justify-between p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-4xl font-medium">Karta qo'shish</h2>
          <div>
            {/* Card image/icon */}
            <img
              src={card}
              alt="Add Card Icon"
              className="w-20 h-30"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Card List */}
        <div className="space-y-4">
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  );
};

const CardItem = () => (
  <div className="relative p-4 text-gray rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold">1234 5678 9012 3456</h3>
    <div className="flex justify-between items-center mt-2">
      <div>
        <p className="text-sm">12/25</p>
        <p className="text-sm">Mastercard</p>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm">AnorBank</span>
        <img
          src="https://your-chip-icon-url-here"
          alt="Card Chip"
          className="w-6 h-6"
        />
      </div>
    </div>
  </div>
);

export default CardsPage;
