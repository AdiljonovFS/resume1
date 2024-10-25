import React, { useState } from 'react';
import TimelineItem from '../ui/TimeLineItem'; // Adjust the path if needed
import BackButton from '../ui/BackButton';
import InsuranceModal from '../settings/modal/incurenceModal';

const Tanirovka = ({title, dateRange}) => {
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
    <div className="text-gray min-h-screen max-w-full mx-auto md:px-40 px-10 p-5 ">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="absolute top-4 left-4">
          <BackButton /> {/* Back button */}
        </div>
        <h1 className="ml-4 text-2xl font-bold ">Tanirovka</h1>
        <div></div>
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

export default Tanirovka;
