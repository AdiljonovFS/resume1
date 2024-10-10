import React from "react";
import { FaCog, FaFileAlt, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NavButton = ({ icon, label, to, isActive }) => (
  <Link to={to}>
    <button
      className={`flex flex-col items-center justify-center text-gray-700 w-20 h-20 rounded-full transition-all duration-300 ease-in-out relative ${
        isActive
          ? "bg-white text-yellow-500 transform -translate-y-2 shadow-4xl absolute -top-8 "
          : "text-white"
      }`}
    >
      <span className="text-3xl">{icon}</span>
      <span className="text-xs">{label}</span>
    </button>
  </Link>
);

const BottomNav = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className="bg-white w-full">
      <nav className="bg-yellow-500  rounded-t-lg fixed bottom-0 w-full flex justify-around shadow-lg">
        <NavButton
          icon={<FaHome />}
          label="Asosiy"
          to="/"
          isActive={location.pathname === "/"}
        />
        <NavButton
          icon={<FaFileAlt />}
          label="Hujjatlarim"
          to="/documents"
          isActive={location.pathname === "/documents"}
        />
        <NavButton
          icon={<FaCog />}
          label="Sozlamalar"
          to="/settings"
          isActive={location.pathname === "/settings"}
        />
      </nav>
    </div>
  );
};

export default BottomNav;
