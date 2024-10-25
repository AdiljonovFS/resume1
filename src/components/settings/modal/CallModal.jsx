// modal/ContactsModal.js
import React from "react";

const ContactsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-80 text-gray">
        <h2 className="text-lg mb-4">Kontaktlar</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full" onClick={onClose}>
          Yopish
        </button>
      </div>
    </div>
  );
};

export default ContactsModal;