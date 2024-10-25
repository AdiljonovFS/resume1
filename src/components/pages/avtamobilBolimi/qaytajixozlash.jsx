import React from "react";
import { FaClock, FaBookmark } from "react-icons/fa"; // Iconlar uchun react-icons
import { HiOutlinePhone, HiOutlineUser } from "react-icons/hi"; // Iconlar uchun react-icons
import { AiFillStar } from "react-icons/ai"; // Rating yulduzcha uchun icon
import 'tailwindcss/tailwind.css';

const CarDetailingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-blue-800 text-gray p-4 flex items-center">
        <button className="text-gray mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-lg font-bold">Avtomobilni qayta jihozlash</h1>
      </header>

      {/* Icons Row */}
      <div className="flex justify-around p-4 shadow-md">
        <div className="text-center">
          <FaClock className="text-3xl text-black mx-auto" />
          <p className="text-gray">Tarix</p>
        </div>
        <div className="text-center">
          <FaBookmark className="text-3xl text-black mx-auto" />
          <p className="text-gray">Saqlanganlar</p>
        </div>
      </div>

      {/* Car Service Section */}
      <section className="shadow-md p-4 mt-4">
        <h2 className="text-lg font-semibold mb-4">Avtoservislar</h2>

        <div className="    p-4 rounded-lg shadow-md">
          {/* Service Image */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Car Service"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Service Details */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Car Driver & Detailing TLZ</h3>
            <p className="text-sm text-gray">детейлинг студия и Автосервис</p>
            <p className="text-sm text-gray mt-2">
              "Наша компания предлагает вашему вниманию Car Driver&Detailing
              профессиональный уход за автомобилями премиум класса..."
            </p>

            {/* Time and Location */}
            <div className="flex items-center mt-2 text-gray">
              <FaClock className="mr-2" />
              <span>09:00–19:00</span>
            </div>
            <div className="flex items-center mt-2 text-gray">
              <img src="https://via.placeholder.com/16x16" alt="map marker" className="mr-2" />
              <span>Car Driver & Detailing TLZ, Tashkent</span>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button className="bg-red text-white px-4 py-2 rounded-lg">
                Xizmatlari
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
                <HiOutlinePhone className="mr-2" />
                Qo'ng'iroq qilish
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
                <HiOutlineUser className="mr-2" />
                Usta chaqirish
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center mt-4">
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <span className="ml-2 text-gray-600">5.0 (146)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDetailingPage;
