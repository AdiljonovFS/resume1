import { BsFillGeoAltFill } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import BackButton from "../../ui/BackButton";

function JarimalarningIchi() {
  const navigate = useNavigate();
  const location = useLocation();
  const { fine } = location.state; // Oldingi sahifadan kelgan ma'lumotlar

  const isDisabled = fine.details.remainingAmount === 0; // Qoldiq 0 bo'lsa tugma nofaol

  return (
    <div className="min-h-screen max-w-full mx-auto md:px-40 px-10 p-5 text-gray ">
      {/* Back Button */}
      

      {/* Car Image */}
      <div className="flex justify-center">
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
        <div className="bg-yellow-300 rounded-full p-8 shadow-lg">
          <img
            src="https://via.placeholder.com/100"
            alt="Car"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* License Plate */}
      <div className="flex justify-center my-4">
        <div className="flex space-x-2 border rounded-lg p-2">
          <div className="text-xl font-semibold">01</div>
          <div className="text-xl font-semibold">123 ABC</div>
          <div className="text-sm flex items-center">
            <span className="border rounded px-1">UZ</span>
          </div>
        </div>
      </div>

      {/* Car Information */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">{fine.carBrand}</h1>
        <p className="text-gray">{fine.carModel}</p>
      </div>

      {/* Video Placeholder */}
      <div className="bg-gray-300 h-48 flex justify-center items-center">
        <div className="text-white">▶️</div>
      </div>

      {/* Date and Details */}
      <div className="text-center text-gray-600 mt-4">
        <p>{fine.details.date} ({fine.details.daysAgo} kun avval)</p>
        <p>{fine.details.rule}</p>
        <p>Qaror {fine.details.decisionDate} ({fine.details.daysAgo} kun avval) sanasi qabul qilindi.</p>
        <p>{fine.details.description}</p>
      </div>

      {/* PDF Button */}
      <div className="flex justify-center my-4">
        <button className="border px-4 py-2 rounded-full text-gray-600">
          Qarorni yuklab olish
        </button>
      </div>

      {/* Map Section */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Map"
          className="w-full rounded-lg"
        />
        <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
          <BsFillGeoAltFill className="text-red-500" />
        </div>
      </div>

      {/* Location */}
      <div className="text-center mt-2">
        <p className="text-gray-600">{fine.details.location}</p>
      </div>

      {/* Fine Information */}
      <div className="mt-4 font-bold">
        <div className="flex justify-between px-4 py-2 text-blue-500">
          <span>Jarima miqdori:</span>
          <span>{fine.details.fineAmount}</span>
        </div>
        <div className="flex justify-between px-4 py-2 text-green-500">
          <span>To'langan:</span>
          <span>{fine.details.paidAmount}</span>
        </div>
        <div className="flex justify-between px-4 py-2 text-red-500">
          <span>Qoldiq:</span>
          <span>{fine.details.remainingAmount}</span>
        </div>
      </div>

      {/* Pay Button */}
      <div className="flex justify-center w-full my-6 mb-20">
        <button
          className={`w-full h-12 rounded-full text-white ${
            isDisabled ? "bg-red opacity-50 cursor-not-allowed" : "bg-red "
          }`}
          disabled={isDisabled}
        >
          To'lash
        </button>
      </div>
    </div>
  );
}

export default JarimalarningIchi;
