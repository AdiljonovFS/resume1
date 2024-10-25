import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';
import { BsCamera } from 'react-icons/bs';
import ChangePasswordModal from './modal/PassworModal';
import { useNavigate } from 'react-router-dom';
import BackButton from '../ui/BackButton';

const ProfileEdit = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex items-center justify-center min-h-screen max-w-full mx-auto md:px-40 px-10 p-5">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
          <BackButton />
        </div>
      <div className="relative bg-bgcolor rounded-lg shadow-lg p-5 w-full max-w-md">
        

        {/* Title */}
        <h1 className="text-center text-2xl font-semibold mb-8 text-gray-700">
          Profilni tahrirlash
        </h1>

        {/* Avatar */}
        <div className="relative flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="absolute top-9 flex items-center justify-center rounded-full">
            <BsCamera className="text-white text-2xl" />
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Nickname */}
          <label className="flex items-center space-x-2">
            <FaUser className="text-gray-500" />
            <input
              type="text"
              placeholder="Nickname"
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </label>  

          {/* Password */}
          <label
            className="flex items-center space-x-2 cursor-pointer"
            onClick={openModal}
          >
            <FaLock className="text-gray-500" />
            <input
              type="password"
              placeholder="************"
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </label>

          {/* Email */}
          <label className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-500" />
            <input
              type="email"
              placeholder="email@gmail.com"
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </label>

          {/* Phone */}
          <label className="flex items-center space-x-2">
            <FaPhone className="text-gray-500" />
            <input
              type="text"
              placeholder="+998 | 90 123 45 67"
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </label>
        </div>

        {/* ONE ID Verification */}
        <div className="mt-8">
          <p className="text-sm text-center font-bold text-blue-500 mb-2">
            ONE ID orqali shaxsingizni tasdiqlang!
          </p>
          <button className="bg-oneid text-white w-full py-3 rounded-md text-lg font-bold">
            ONE ID
          </button>
        </div>
      </div>

      <ChangePasswordModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ProfileEdit;
