import React from "react";

const MurojatModal = ({ isOpen, onClose, openChatModal, openContactsModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-gray" onClick={()=>{onClose()}}>
      <div className="bg-white rounded-lg p-6 w-96 h-1/4" onClick={()=>{onClose()}}>
        <h2 className="text-lg mb-4">Murojat qilish</h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 mb-2 w-full rounded flex justify-between items-center"
          onClick={() => {
            onClose();
            openChatModal();
          }}
        >
          <span>Operator bilan chat</span>
          <span>{'>'}</span>
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 w-full rounded flex justify-between items-center"
          onClick={() => {
            onClose();
            openContactsModal();
          }}
        >
          <span>Kontaktlar</span>
          <span>{'>'}</span>
        </button>
      </div>
    </div>
  );
};

export default MurojatModal;
