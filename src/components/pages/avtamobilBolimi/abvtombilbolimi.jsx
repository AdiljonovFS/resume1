import { FaArrowLeft } from "react-icons/fa"; // Orqaga tugma
import { BiCar } from "react-icons/bi"; // Avto simvoli
import { AiFillCheckCircle } from "react-icons/ai"; // Tekshirish belgisi
import { MdExitToApp } from "react-icons/md"; // Maydonchadan chiqish
import { Link, useLocation } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import CarDeta from "../../ui/CarDetails";
import CarPlate from "../../ui/CarNumber";
import taqiq from "../../../assets/taqiq.svg";
import jarimamaydoni from "../../../assets/jariamMaydoni.svg";

const AvtomibileBolimi = () => {
  const { state } = useLocation(); // useLocation orqali ma’lumot olish
  const activeCar = state?.activeCar;

  if (!activeCar) {
    return <div>Ma'lumot topilmadi!</div>;
  }

  return (
    <div className="min-h-screen max-w-full mx-auto md:px-40 px-10 p-5 text-gray   pb-24">
      {/* Header */}
      <div className="absolute top-4 left-4">
        <BackButton /> {/* Back button */}
      </div>
      <div className="flex items-center justify-center space-x-4">
        
        <div className="flex items-center px-4 py-2 rounded-md">
          <CarPlate car={activeCar}/>
        </div>
      </div>

      {/* Car Image Section */}
      <div className="flex justify-center my-6">
          <CarDeta/>
      </div>
      

      <div className="text-xl text-center mb-5 text-gray">
      <h1 className="text-4xl font-bold text-gray">Chevrolet</h1>
          {activeCar.name} ({activeCar.year})
        </div>
        

      {/* Control Buttons */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="p-4 rounded-lg shadow-md w-1/2 mx-auto flex flex-col items-center transition-transform transform hover:scale-105">
          <img src={taqiq} alt="" className="w-32" />
          <span className="text-center ">Taqiqli tekshirish</span>
        </div>
        <div className="p-4 rounded-lg flex shadow-md w-1/2 mx-auto flex-col items-center transition-transform transform hover:scale-105">
          <img src={jarimamaydoni} alt="" className="w-32" />
          <span className="text-center text-gray-700">
            Jarima maydonchasidan olib chiqish
          </span>
        </div>
      </div>

      {/* Car Information Section */}
      <div className="space-y-4">
        {renderInfo("Avtomobil egasi:", "INTENSE BEST GROUP MCHJ")}
        {renderInfo("Rang:", "oq")}
        {renderInfo("Chiqirilgan yili:", "2019")}
        {renderInfo("Modeli:", "Cobalt")}
        {renderInfo("Shassi tanasi raqami:", "XWBJF69VEKA150610")}
        {renderInfo("Butun vazni (kg):", "1590")}
        {renderInfo("Yuksiz og'irligi (kg):", "1090")}
        {renderInfo("Dvigatel raqami:", "B15D212193252DJ CX0902")}
        {renderInfo("Yoqilg'i turi:", "Газпр")}
        {renderInfo("Tex-passport:", "AAG 1234567")}
        {renderInfo("Ro'yxatga olingan sana:", "20.03.2024")}
      </div>
    </div>
  );
};

// Helper Function for rendering car information rows
const renderInfo = (label, value) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex justify-between">
    <span className="font-semibold text-gray-700">{label}</span>
    <span className="text-gray-900">{value}</span>
  </div>
);

export default AvtomibileBolimi;


