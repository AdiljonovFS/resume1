import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarComponent = ({ cars, onCarSelect }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll to active car
  useEffect(() => {
    const carWidth = scrollRef.current?.children[0]?.offsetWidth || 300;
    const newScrollPosition = activeIndex * carWidth;
    scrollRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" });
  }, [activeIndex]);

  const handleCarClick = (index) => {
    setActiveIndex(index); // Set the active index directly
    onCarSelect(cars[index]); // Call onCarSelect with the selected car directly
  };

  const scrollLeft = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const scrollRight = () => {
    if (activeIndex < cars.length - 1) setActiveIndex(activeIndex + 1);
  };

  return (
    <div className="relative mt-2">
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 p-4 rounded-full shadow-md -translate-y-1/2 top-1/2 text-gray"
      >
        <FaChevronLeft size={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-hidden w-full h-full items-center justify-center"
      >
        {cars.map((car, index) => (
          <div
            key={car.id}
            className={`transition-transform duration-500 ease-in-out min-w-full flex items-center justify-center ${
              index === activeIndex ? "scale-70" : "scale-15"
            } min-w-[300px] flex-shrink-0 cursor-pointer`}
            onClick={() => handleCarClick(index)} // Handle click
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-72 h-68 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 p-4 rounded-full shadow-md -translate-y-1/2 top-1/2 text-gray"
      >
        <FaChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {cars.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-bgcolor" : "bg-whiteS"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarComponent;
