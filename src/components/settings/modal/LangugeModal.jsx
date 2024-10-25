import React from "react";

const LanguageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-80 text-gray">
        <h2 className="text-xl mb-4 text-center font-bold">Tilni tanlang</h2>
        <div className="flex flex-col  items-center justify-around ">
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-20 m-2" onClick={onClose}>
          Uz
        </button>
        <button className="bg-red text-white py-2 px-4 rounded w-20 m-2" onClick={onClose}>
          Rus
        </button>
        <button className="bg-gray text-white py-2 px-4 rounded w-20 m-2" onClick={onClose}>
          Eng
        </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;