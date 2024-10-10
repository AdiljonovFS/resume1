import React from "react";

const VehicleInfo = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Chevrolet</h2>
          <p className="text-gray-500">Cobalt</p>
        </div>
        {/* Notification Icon */}
        <div className="relative">
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full"></span>
          <button className="p-2 bg-yellow-100 rounded-full">
            <svg
              className="w-6 h-6 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m0 0h-1m0 0h1m1 0h1m6-2V7.343a8.001 8.001 0 10-12.486 0V10h1m12.486 0h-1m0 0h-1M10 16h1m2 4h-1m0-4h1v-4m-1 4h1v4m2-4h1v-4h-1"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* License Plate */}
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center bg-gray-100 p-2 rounded-md">
          <input
            type="text"
            value="01"
            className="w-10 bg-transparent text-center"
            readOnly
          />
          <input
            type="text"
            value="123 ABC"
            className="w-20 bg-transparent text-center"
            readOnly
          />
        </div>
        <div className="bg-yellow-200 p-4 rounded-lg">
          <img
            src="/path-to-car-image.png"
            alt="Car"
            className="w-20 h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
