import React, { useCallback, useState } from "react";
import { FaBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import balon from "../assets/avto.svg";
import kitob from "../assets/yo'lkitobchasi.svg";
import royxat from "../assets/jarimalar.svg";
import settings from "../assets/settings.png";
import speed from "../assets/speed.png";
import evakuvator from "../assets/evakuvator.svg"
import carAval from "../assets/car.svg";
import CarPlate from "./ui/CarNumber";
import OptionItem from "./ui/OptionItem";
import CarComponent from "./ui/CarComponent";
import TimelineItem from "./ui/TimeLineItem";

const HomePage = () => {
  const cars = [
    {
      id: 1,
      name: "Cobalt",
      year: 2020,
      image: carAval,
      code: "01",
      number: "123 ABC",
      country: "UZ",
      flag: "https://flagcdn.com/w320/uz.png",
      owner: "John Doe", // New field
      color: "Red",      // New field
      model: "Cobalt LT",// New field
      chassisNumber: "XYZ1234567890", // New field
      totalWeight: 1500, // New field
      emptyWeight: 1200, // New field
      engineNumber: "ENG123456", // New field
      fuelType: "Petrol", // New field
      technicalPassport: "TP123456", // New field
      registrationDate: "2020-10-10", // New field

    },
    {
      id: 2,
      name: "Malibu",
      year: 2021,
      image: carAval,
      code: "01",
      number: "130 ABC",
      country: "UZ",
      flag: "https://flagcdn.com/w320/uz.png",
      owner: "Jane Smith", // New field
      color: "Blue",       // New field
      model: "Malibu LT",  // New field
      chassisNumber: "XYZ9876543210", // New field
      totalWeight: 1600,   // New field
      emptyWeight: 1300,   // New field
      engineNumber: "ENG654321", // New field
      fuelType: "Diesel",  // New field
      technicalPassport: "TP654321", // New field
      registrationDate: "2021-09-15", // New field
    },
    {
      id: 3,
      name: "Tracker",
      year: 2022,
      image: carAval,
      code: "01",
      number: "144 ABC",
      country: "UZ",
      flag: "https://flagcdn.com/w320/uz.png",
      owner: "Alice Johnson", // New field
      color: "Black",         // New field
      model: "Tracker RS",    // New field
      chassisNumber: "XYZ4567890123", // New field
      totalWeight: 1700,      // New field
      emptyWeight: 1400,      // New field
      engineNumber: "ENG789012", // New field
      fuelType: "Electric",    // New field
      technicalPassport: "TP789012", // New field
      registrationDate: "2022-05-20", // New field
    },
  ];
  const [activeCar, setActiveCar] = useState(cars[0]);
  const onCarSelect = useCallback((car) => {
    setActiveCar(car);
  }, []);
  const options = [
    { icon: settings, link: "/jixozlash", label: "Qayta jixozlash" },
    { icon: speed, link: "/", label: "Avtomobil tarixi" },
    { icon: evakuvator, link: "/evakuvator", label: "Evakuvator chaqirishi" },
  ];

  const timelines = [
    { title: "Texnik ko'rik", dateRange: "08.10.2023 - 10.30.2024", to:"/texnikkorik" },
    { title: "Sug'urta", dateRange: "08.10.2024 - 12.12.2024", to:"/sugurta" },
    { title: "Haydovchilik Guvohnomasi", dateRange: "10.10.2023 - 10.21.2024", to:"/guvohnoma" },
    { title: "Tonirovka", dateRange: "08.10.2023 - 12.09.2024", to:"/tanirovka" },
    { title: "Avtomobil moyi", dateRange: "08.10.2024 - 02.01.2025", to:"/avtomobilemoyi" },
    { title: "Gaz", dateRange: "10.24.2024 - 01.01.2025", to:"/gaz" },
    { title: "Ishonchnoma", dateRange: "10.10.2023 - 12.19.2024", to:"/ishonchnoma" },
  ];

  return (
    <div
      className="min-h-screen max-w-full mx-auto md:px-40 px-10 pt-5 pb-20"
      
    >
      <header className="shadow-lg p-4 rounded-md md:px-20">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray">Chevrolet</h1>
          <div className="relative">
            <FaBell size={24} className="text-gray hover:text-gray-700" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red rounded-full"></span>
          </div>
        </div>

        {/* Display the selected car's name */}
        <div className="text-xl my-6 mb-5 text-gray">
          {activeCar.name} ({activeCar.year})
        </div>

        {/* Display the selected car's plate data */}
        <CarPlate car={activeCar} />

        <CarComponent cars={cars} onCarSelect={onCarSelect}/>

      </header>

      {/* Navigation section */}
      <div className="grid md:grid-cols-3 grid-cols-1 py-4">
        <Link to="/jarimalar">
          <OptionItem icon={royxat} label="Jarimalar" />
        </Link>
        <Link to="/cardetails" state={{ activeCar }}>
          <OptionItem icon={balon} label="Avtomobil bo'limi" />
        </Link>
        <Link to="/">
          <OptionItem icon={kitob} label="Yo'l kitobchasi" />
        </Link>
      </div>

      {/* Options section */}
      <section className="grid md:grid-cols-3 grid-cols-1 text-bgcolor">
        {options.map((option, index) => (
          <Link to={option.link} key={index}>
            <OptionItem icon={option.icon} label={option.label} />
          </Link>
        ))}
      </section>

      {/* Timeline section */}
      <section className="my-4 grid md:grid-cols-2 grid-cols-1">
  {timelines.map((item, index) => (
    <Link to={item.to} key={index}>  {/* Wrap TimelineItem with Link */}
      <TimelineItem {...item} />
    </Link>
  ))}
</section>

    </div>
  );
};

export default HomePage;
