import React, { useState } from 'react';
import TimelineItem from '../ui/TimeLineItem'; // Adjust the path if needed
import BackButton from '../ui/BackButton';
import ishonchnoma from '../../assets/ishonchnoma.svg'

const Ishonchnoma = ({title, dateRange}) => {

  return (
    <div className="text-gray min-h-screen max-w-full mx-auto md:px-40 px-10 p-5 ">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="absolute top-4 left-4">
          <BackButton /> {/* Back button */}
        </div>
        <h1 className="ml-4 text-2xl font-bold ">Ishonchnoma</h1>
        <div></div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex items-center justify-between" >
        <h2 className="md:text-4xl text-xl font-medium mb-2">Ishonchnoma berish</h2>
        <img
          src={ishonchnoma}
          alt="Buy Insurance"
          className="w-20"
        />
      </div>

      <section className="my-4 grid md:grid-cols-2 grid-cols-1">
      <TimelineItem
        title="Ishonchnoma OSAGO"
        dateRange="06.10.2024 - 06.02.2025"
      />

      <TimelineItem
        title="Sug'urta OSAGO"
        dateRange="06.10.2024 - 06.02.2025"
      />
      </section>

    </div>
  );
};

export default Ishonchnoma;
