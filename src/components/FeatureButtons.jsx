import React from "react";

const features = [
  { title: "Jarimalar", icon: "gavel" },
  { title: "Avtomobil bo'limi", icon: "wrench" },
  { title: "Yo'l kitobchasi", icon: "book" },
  { title: "Avtomobil qayta jihozlash", icon: "tools" },
  { title: "Avtomobil tarixini tekshirish", icon: "history" },
  { title: "Evakuatorni chaqirish", icon: "tow-truck" },
];

const FeatureButtons = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center"
        >
          <img
            src={`/icons/${feature.icon}.svg`}
            alt={feature.title}
            className="w-8 h-8 mb-2"
          />
          <span className="text-sm">{feature.title}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureButtons;
