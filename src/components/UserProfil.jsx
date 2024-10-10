import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-full mx-auto px-4 bg-white rounded-lg shadow-md overflow-hidden">
        {/* Profile header */}
        <div className="bg-yellow-300 relative rounded-2xl mx-4 shadow-2xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24 bg-white rounded-full border-4 border-yellow-300">
            <img
              src="profile-picture.jpg"
              alt="User"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-center mt-16 pt-12">
            <h2 className="text-xl font-bold text-gray-800">
              Azamjon Alijonov Palonchiyev
            </h2>
            <p className="text-gray-600">+998 90 123 45 67</p>
            <div className="flex justify-center p-2">
              <span className="px-4 py-1 bg-purple-500 text-white rounded-lg">
                ONE ID
              </span>
              <span className="ml-2 px-4 py-1 bg-green-500 text-white rounded-lg">
                Tasdiqlangan
              </span>
            </div>
          </div>
        </div>

        {/* Passport information */}
        <div className="px-4 py-4 space-y-4">
          <h3 className="font-bold text-gray-800">Passport ma'lumotlari</h3>
          <div className="grid grid-cols-1 gap-2">
            <InfoRow label="Tug'ilgan sana" value="29.11.2003" />
            <InfoRow label="JShShIR" value="928741927431" />
            <InfoRow label="Muddat tugash sanasi" value="02.09.2031" />
            <InfoRow
              label="Kim tomonidan berilgan"
              value="АСАКИНСКИЙ ГОМ АСАКИНСКОГО РОВД АНДИЖАНСКОЙ ОБЛАСТИ"
            />
            <InfoRow label="Passport seriya va raqami" value="AA12345" />
          </div>

          {/* Permanent address */}
          <h3 className="font-bold text-gray-800">Doimiy ro'yxatdan o'tgan manzili</h3>
          <div className="grid grid-cols-1 gap-2">
            <InfoRow label="Mamlakat" value="O'zbekiston Respublikasi" />
            <InfoRow label="Hudud" value="Sirdaryo Viloyati" />
            <InfoRow label="Tuman" value="Mirzaobod tumani" />
            <InfoRow label="Manzil" value="БИРЛАШГАН ҚФЙ, М.УЛУГБЕК МФЙ, uy:P/C" />
            <InfoRow label="Kadastr raqami" value="12:03:04:02:04:0219" />
          </div>

          {/* Driving license */}
          <h3 className="font-bold text-gray-800">Haydovchilik Guvohnomasi</h3>
          <div className="grid grid-cols-1 gap-2">
            <InfoRow label="Berilgan sana" value="03.10.2021" />
            <InfoRow label="Amal qilish muddati" value="03.10.2031" />
            <InfoRow label="Berilgan joyi" value="Mirzaobod tumani" />
            <InfoRow label="Guvohnoma raqami" value="AG0187865" />
          </div>

          {/* Vehicle categories */}
          <h3 className="font-bold text-gray-800">Avtomobil toifasi</h3>
          <div className="grid grid-cols-3 gap-2">
            <InfoRow label="A" value="03.10.2025" />
            <InfoRow label="B" value="03.10.2025" />
            <InfoRow label="C" value="" />
            <InfoRow label="D" value="" />
            <InfoRow label="BE" value="" />
            <InfoRow label="CE" value="" />
            <InfoRow label="DE" value="" />
          </div>

          {/* Special notes */}
          <div className="pb-24">
            <InfoRow label="Alohida belgilar" value="Birinchi marta" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable component for information rows
const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center rounded-xl border border-gray-300 px-4 py-2">
    <span className="text-gray-700 font-bold">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default UserProfile;
