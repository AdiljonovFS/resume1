import React from "react";
import { FaCar, FaBell, FaTools, FaBook, FaWrench, FaTruck, FaMapMarkerAlt, FaFlagCheckered, FaPlusCircle, FaHome, FaFileAlt, FaCog, FaOilCan } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaCar size={32} className="text-yellow-500" />
          <div>
            <h1 className="text-lg font-bold">Chevrolet</h1>
            <p className="text-sm text-gray-500">Cobalt</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 relative">
          <FaBell size={24} className="text-gray-500" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
      </header>

      {/* Vehicle Selection */}
      <section className="bg-white p-4 shadow-md my-2 rounded-lg">
        <div className="flex items-center justify-between space-x-2">
          <input
            type="text"
            className="border p-2 rounded-md w-16 text-center"
            placeholder="01"
          />
          <input
            type="text"
            className="border p-2 rounded-md w-28 text-center"
            placeholder="123 ABC"
          />
        </div>
        <div className="mt-4 flex justify-center">
          {/* Placeholder for the car image */}
          <img
            src="https://via.placeholder.com/150x100?text=Car+Image"
            alt="Car"
            className="w-32 h-auto"
          />
        </div>
      </section>

      {/* Options */}
      <section className="grid grid-cols-3 gap-4 p-4 bg-white shadow-lg my-4 rounded-lg">
        <OptionItem icon={<FaTools size={32} />} label="Jarimalar" />
        <OptionItem icon={<FaTruck size={32} />} label="Avtomobil bo'limi" />
        <OptionItem icon={<FaBook size={32} />} label="Yo'l kitobchasi" />
      </section>

      {/* Map Section */}
      <section className="bg-white p-4 shadow-md rounded-lg my-4">
        <div className="flex justify-between items-center">
          <FaMapMarkerAlt size={32} className="text-red-500" />
          <div>
            <h2 className="text-md font-bold">Manzillar</h2>
            <p className="text-sm text-gray-500">Samarqand ko'chasi 34</p>
          </div>
        </div>
        {/* Placeholder for map image */}
        <img
          src="https://via.placeholder.com/400x150?text=Map+Image"
          alt="Map"
          className="w-full h-32 mt-4"
        />
      </section>

      {/* Timelines */}
      <section className="my-4">
        <TimelineItem
          title="Texnik ko'rik"
          dateRange="08.10.2024 - 08.02.2025"
          status="Muddati tugadi"
          statusColor="text-red-500"
        />
        <TimelineItem
          title="Sug'urta"
          dateRange="08.10.2024 - 06.02.2025"
          status="4 oy, 21 kun qoldi."
          statusColor="text-gray-500"
        />
        <TimelineItem
          title="Haydovchilik Guvohnomasi"
          dateRange="08.10.2024 - 06.02.2025"
          status="4 oy, 21 kun qoldi."
          statusColor="text-gray-500"
        />
        <TimelineItem
          title="Tonirovka"
          dateRange="08.10.2024 - 06.02.2025"
          status="4 oy, 21 kun qoldi."
          statusColor="text-gray-500"
        />
        <TimelineItem
          title="Avtomobil moyi"
          dateRange="08.10.2024 - 06.10.2024"
          status="0 oy, 0 kun qoldi."
          statusColor="text-gray-500"
        />
        <TimelineItem
          title="Gaz"
          dateRange="08.10.2024 - 06.10.2024"
          status="0 oy, 0 kun qoldi."
          statusColor="text-gray-500"
        />
        <TimelineItem
          title="Ishonchnoma"
          dateRange="08.10.2024 - 06.10.2024"
          status="0 oy, 0 kun qoldi."
          statusColor="text-gray-500"
        />
      </section>

    </div>
  );
};

// Option item component
const OptionItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-sm">{label}</p>
    </div>
  );
};

// Timeline item component
const TimelineItem = ({ title, dateRange, status, statusColor }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg my-2">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-md font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{dateRange}</p>
        </div>
        <FaFlagCheckered size={24} className="text-yellow-500" />
      </div>
      <p className={`text-sm mt-2 ${statusColor}`}>{status}</p>
    </div>
  );
};

// Bottom navigation item component
const NavItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-xs">{label}</p>
    </div>
  );
};

export default HomePage;
