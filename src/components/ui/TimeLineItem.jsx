import { useState, useEffect } from "react";
import car from "../../assets/car2.png";
import way from "../../assets/yo'l.svg";

const TimelineItem = ({ title, dateRange }) => {
  const [progress, setProgress] = useState(10); // Start at 10% progress
  const [status, setStatus] = useState("");
  const [carVisible, setCarVisible] = useState(true); // Ensure car remains visible after expiration

  const [startDateStr, endDateStr] = dateRange.split(" - ");
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  useEffect(() => {
    const updateProgress = () => {
      const today = new Date();
      const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
      const elapsedDays = (today - startDate) / (1000 * 60 * 60 * 24) + 1;

      // Adjust progress between 10% and 80%
      const newProgress = Math.min(
        20 + (elapsedDays / totalDays) * 55, // Scale to 10-80% range
        75
      );
      setProgress(newProgress);

      const remainingDays = Math.round(
        (endDate - today) / (1000 * 60 * 60 * 24)
      );

      const newStatus =
        today < startDate
          ? "Kutilmoqda" // Pending
          : today > endDate
          ? "Muddati tugagan" // Expired
          : `Qolgan vaqt: ${remainingDays} kun`; // Remaining time
      setStatus(newStatus);

      // Ensure car visibility even if period is expired
      if (today > endDate) setCarVisible(true);
    };

    updateProgress(); // Initial calculation
    const interval = setInterval(updateProgress, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [startDate, endDate]);

  return (
    <div className="p-6 shadow-lg rounded-lg">
      <div className={`flex justify-between items-center mb-4 ${
          status === "Muddati tugagan" ? "text-red" : "text-gray"
        }`}>
        <div>
          <h3 className={`text-lg font-semibold`}>{title}</h3>
          <p className="text-sm">{dateRange}</p>
        </div>
      </div>

      {/* Progress track and car */}
      <div className="relative w-full md:h-36 h-20 rounded-lg overflow-hidden">
        <img
          src={way}
          alt="Way"
          className="absolute top-6 left-0 w-full h-full object-cover"
        />

        {/* Display car even if the period has expired */}
        {carVisible && (
          <img
            src={car}
            alt="Car"
            className="absolute top-3 md:w-36 w-20"
            style={{
              left: `${progress}%`,
              transform: "translateX(-50%)",
              transition: "left 1s linear",
            }}
          />
        )}
      </div>

      {/* Status message with conditional styling */}
      <p
        className={`text-sm mt-4 ${
          status === "Muddati tugagan" ? "text-red" : "text-black"
        }`}
      >
        {status}
      </p>
    </div>
  );
};

export default TimelineItem;
