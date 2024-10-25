import { AiOutlineLeft } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate(-1)} 
      className="p-4 rounded-full shadow-md bg-white flex items-center space-x-2 text-gray font-bold"
    >
       <FaChevronLeft size={24} />
    </button>
  );
};

export default BackButton;
