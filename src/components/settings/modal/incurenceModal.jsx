import { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

const InsuranceModal = ({ onClose, onFinish }) => {
  const [step, setStep] = useState(1); // Tracks the current step
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);

  const companies = [
    { id: 1, name: 'INSON', logo: 'https://via.placeholder.com/100' },
    { id: 2, name: 'NEO Insurance', logo: 'https://via.placeholder.com/100' },
    { id: 3, name: 'GROSS Insurance', logo: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Kapital Sug’urta', logo: 'https://via.placeholder.com/100' },
  ];

  const durations = [
    { id: 1, label: '6 oy' },
    { id: 2, label: '12 oy' },
  ];

  // Sample insurance details (can be fetched from the backend)
  const insuranceDetails = {
    coverage: '40 000 000 UZS',
    payment: '120 000 UZS',
  };

  const handleSelectCompany = (id) => setSelectedCompany(id);
  const handleSelectDuration = (id) => setSelectedDuration(id);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
        {/* Header */}
        <div className="flex items-center mb-4">
          <button onClick={step === 1 ? onClose : prevStep} className="text-xl">
            <AiOutlineLeft />
          </button>
          <h2 className="flex-grow text-center text-lg font-semibold">
            {step === 1
              ? 'Sug’urta kompaniyalari'
              : step === 2
              ? 'Sug’urta muddati'
              : 'Sug’urtani harid qilish'}
          </h2>
        </div>

        {/* Step 1: Company Selection */}
        {step === 1 && (
          <>
            <p className="text-center text-gray-500 mb-6">
              Sug’urtani harid qilish uchun birinchi sug’urta kompaniyalardan birini tanlang!
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {companies.map((company) => (
                <div
                  key={company.id}
                  onClick={() => handleSelectCompany(company.id)}
                  className={`border rounded-lg p-4 flex items-center justify-center cursor-pointer ${
                    selectedCompany === company.id ? 'border-blue-500' : 'border-gray-300'
                  }`}
                >
                  <img src={company.logo} alt={company.name} className="h-12" />
                </div>
              ))}
            </div>
            <button
              onClick={nextStep}
              className={`w-full py-3 rounded-lg text-white ${
                selectedCompany ? 'bg-blue-500' : 'bg-gray cursor-not-allowed'
              }`}
              disabled={!selectedCompany}
            >
              Davom etish
            </button>
          </>
        )}

        {/* Step 2: Duration Selection */}
        {step === 2 && (
          <>
            <p className="text-center text-gray-500 mb-6">
              Sug’urtani harid qilish uchun sug’urta muddatini tanlang!
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {durations.map((duration) => (
                <div
                  key={duration.id}
                  onClick={() => handleSelectDuration(duration.id)}
                  className={`border rounded-lg p-4 flex items-center justify-center cursor-pointer ${
                    selectedDuration === duration.id ? 'border-blue-500' : 'border-gray'
                  }`}
                >
                  <span className="text-lg font-semibold">{duration.label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={nextStep}
              className={`w-full py-3 rounded-lg text-white ${
                selectedDuration ? 'bg-blue-500' : 'bg-gray cursor-not-allowed'
              }`}
              disabled={!selectedDuration}
            >
              Davom etish
            </button>
          </>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Coverage Icon"
                className="mr-3"
              />
              <div>
                <p className="text-lg font-semibold">
                  Sug’urta qoplamasi: {insuranceDetails.coverage}
                </p>
                <p className="text-lg font-semibold">
                  To’lash kerak: {insuranceDetails.payment}
                </p>
              </div>
            </div>
            <p className="text-center text-gray mb-6">
              Sug’urta harid qilayotganingiz, sug’urta qoplamasi va siz to’lashingiz kerak bo’lgan summa.
            </p>
            <button
              onClick={() => onFinish(selectedCompany, selectedDuration)}
              className="w-full py-3 rounded-lg bg-blue-500 text-white"
            >
              Harid qilish
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default InsuranceModal;
