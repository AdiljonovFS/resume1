import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Ensure react-icons is installed
import TimelineItem from '../ui/TimeLineItem'; // Adjust the path if needed
import BackButton from '../ui/BackButton';
import sugurta from '../../assets/sugurta.svg'
import InsuranceModal from '../settings/modal/incurenceModal';

const Sugurta = ({title, dateRange}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selection, setSelection] = useState(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFinish = (companyId, durationId) => {
    setSelection({ companyId, durationId });
    setIsModalOpen(false);
    console.log('Selection:', { companyId, durationId }); // Use this for further logic
  };

  return (
    <div className="text-gray min-h-screen max-w-full mx-auto md:px-40 px-10 p-5">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="absolute top-4 left-4">
          <BackButton /> {/* Back button */}
        </div>
        <h1 className="ml-4 text-2xl font-bold ">Sug'rta</h1>
        <div></div>
      </div>

      {/* Buy Insurance Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex items-center justify-between" onClick={handleOpenModal}>
        <h2 className="text-4xl font-medium mb-2">Sug'urta sotib olish</h2>
        <img
          src={sugurta}
          alt="Buy Insurance"
          className="w-20"
        />
      </div>
      <section className="my-4 grid md:grid-cols-2 grid-cols-1">
      <TimelineItem
        title="Sug'urta OSAGO"
        dateRange="06.10.2024 - 06.02.2025"
      />

      <TimelineItem
        title="Sug'urta OSAGO"
        dateRange="06.10.2024 - 06.02.2025"
      />
      </section>

      {/* Timeline Items */}
      {isModalOpen && (
        <InsuranceModal onClose={handleCloseModal} onFinish={handleFinish} />
      )}
    </div>
  );
};

export default Sugurta;
