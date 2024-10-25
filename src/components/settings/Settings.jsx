import React, { useState, useEffect } from "react";
import { MdExitToApp, MdModeEdit } from "react-icons/md";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import { Link } from "react-router-dom";


// Importing assets
import xavfsizlik from "../../assets/xavfsizlik.svg";
import operator from "../../assets/operator.svg";
import til from "../../assets/til.svg";
import card from "../../assets/card.svg";
import mavzu from "../../assets/mavzu.svg";
import notif from "../../assets/Notif.svg";
import MurojatModal from "./modal/MurojatModal";
import ChatModal from "./modal/ChatModal";
import ContactsModal from "./modal/CallModal";
import LogOutModal from "./modal/LogOutModal";
import LanguageModal from "./modal/LangugeModal";

function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMurojatModalOpen, setIsMurojatModalOpen] = useState(false); // State for Murojat modal
  const [isChatModalOpen, setIsChatModalOpen] = useState(false); // State for Chat modal
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false); // State for Contacts modal
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false)
  // Load theme from local storage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle between dark and light mode
  const handleThemeToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen max-w-full mx-auto md:px-40 px-10 p-5 text-gray">
      {/* Profile Section */}
      <div className="bg-bgcolor rounded-lg shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="rounded-full w-16 h-16"
            src="https://via.placeholder.com/150"
            alt="profile"
          />
          <div className="ml-4">
            <h2 className="text-white font-bold text-xl">Nickname</h2>
            <p className="text-white">+998 90 123 45 67</p>
          </div>
        </div>
        <Link to="/settings/profileEdit">
          <button className="w-16 h-16 text-white flex items-center justify-center">
            <MdModeEdit size={32} />
          </button>
        </Link>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        {/* Left column with two stacked rows */}
        <div className="flex flex-col gap-2">
          <div className="bg-white shadow-md p-8 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <img src={notif} alt="Notification" className="mr-2" />
              <span className="font-medium">Bildirishnoma</span>
            </div>
            <FiToggleLeft size={24} />
          </div>

          <div className="bg-white shadow-md p-8 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <img src={mavzu} alt="Theme" className="mr-2" />
              <span className="font-medium">Mavzu</span>
            </div>
            <button onClick={handleThemeToggle}>
              {isDarkMode ? (
                <FiToggleRight size={24} className="text-yellow-400" />
              ) : (
                <FiToggleLeft size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Right side single row with Modal trigger */}
        <div
          className="bg-white shadow-md p-4 pl-8 rounded-lg flex justify-between items-center cursor-pointer"
          onClick={() => setIsMurojatModalOpen(true)} // Open Murojat modal on click
        >
          <div className="flex items-center">
            <img src={operator} alt="Support" className="mr-2" />
            <span className="font-medium">Murojat qilish</span>
          </div>
        </div>

        {/* Bottom grid with custom layout */}
        <div className="bg-white shadow-md p-4 pl-8 rounded-lg flex justify-between items-center">
          <Link to={"/settings/payment"}>
            <div className="flex items-center">
              <img src={card} alt="Cards" className="mr-2" />
              <span className="font-medium">Kartalar</span>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-white shadow-md p-8 rounded-lg flex justify-between items-center" onClick={()=> setIsLanguageModalOpen(true)}>
            <div className="flex items-center">
              <img src={til} alt="Language" className="mr-2" />
              <span className="font-medium">Interfeys tili (uz)</span>
            </div>
          </div>

          <div className="bg-white shadow-md p-8 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <img src={xavfsizlik} alt="Security" className="mr-2" />
              <span className="font-medium">Xavfsizlik</span>
            </div>
          </div>
        </div>
        {/* ONE ID Button */}
        <button className="bg-oneid text-white py-4 rounded-lg shadow-md">
          ONE ID
        </button>

        {/* Logout Button */}
        <button className="bg-red text-white py-4 rounded-lg shadow-md flex justify-center items-center" onClick={() => setIsLogOutModalOpen(true)}>
          <MdExitToApp className="mr-2" size={24} />
          Chiqish
        </button>
      </div>


      <LanguageModal
      isOpen={isLanguageModalOpen}
      onClose={() => setIsLanguageModalOpen(false)} 
      />
      {/* Logout Button */}
      <LogOutModal 
      isOpen={isLogOutModalOpen}
      onClose={() => setIsLogOutModalOpen(false)}
      />
      {/* Murojat Modal */}
      <MurojatModal
        isOpen={isMurojatModalOpen}
        onClose={() => setIsMurojatModalOpen(false)}
        openChatModal={() => setIsChatModalOpen(true)}
        openContactsModal={() => setIsContactsModalOpen(true)}
      />

      {/* Chat Modal */}
      <ChatModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
      />

      {/* Contacts Modal */}
      <ContactsModal
        isOpen={isContactsModalOpen}
        onClose={() => setIsContactsModalOpen(false)}
      />
    </div>
  );
}

export default Settings;
