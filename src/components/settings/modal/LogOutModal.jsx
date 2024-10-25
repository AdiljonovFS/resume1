import React from "react";

const LogOutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-80 text-gray">
        <h2 className="text-xl mb-4 text-center font-bold">Accountdan chiqishni tasdiqlang</h2>
        <div className="flex items-center justify-around ">
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-20" onClick={onClose}>
          Ha
        </button>
        <button className="bg-red text-white py-2 px-4 rounded w-20" onClick={onClose}>
          Yo'q
        </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
