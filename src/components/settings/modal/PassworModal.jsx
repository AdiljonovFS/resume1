import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-bgcolor rounded-xl shadow-lg w-11/12 sm:w-96 p-6 relative">
        <button 
          className="absolute top-3 left-3 text-2xl text-gray-500" 
          onClick={onClose}
        >
          &#8592;
        </button>

        <h2 className="text-xl font-semibold text-center mb-1">
          Parolni o‘zgartirish
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Avval eski parolni kiriting!
        </p>

        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-600 text-lg py-2 pr-10"
            placeholder="************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
          </button>
        </div>

        <a href="#" className="text-blue-600 hover:underline text-sm block mb-4">
          Parolni unutdingizmi?
        </a>

        <button
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white text-lg py-3 rounded-lg transition"
        >
          Davom etish
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
