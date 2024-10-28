import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex flex-col p-4  md:flex-row justify-between bg-gray-800 text-white  text-sm items-center space-y-4 md:space-y-0 md:px-20">
      <div className="flex items-center space-x-2">
        <FaPhoneAlt />
        <span>+998 (93) 260 49 97</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaEnvelope />
        <span>adiljonovfatxulla4@gmail.com</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt />
        <span>Tashkent city</span>
      </div>
    </div>
  );
};

export default Header;
