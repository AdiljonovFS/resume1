import React, { useState } from 'react';
import TimelineItem from '../ui/TimeLineItem'; // Adjust the path if needed
import BackButton from '../ui/BackButton';

const Avtomobile = ({title, dateRange}) => {

  return (
    <div className="text-gray min-h-screen max-w-full mx-auto md:px-40 px-10 p-5 ">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="absolute top-4 left-4">
          <BackButton /> {/* Back button */}
        </div>
        <h1 className="ml-4 text-2xl font-bold ">Avtomobil Moyi</h1>
        <div></div>
      </div>

      <section className="my-4 grid md:grid-cols-2 grid-cols-1">
      <TimelineItem
        title="Sug'urta OSAGO"
        dateRange="06.10.2024 - 10.26.2024"
      />

      <TimelineItem
        title="Sug'urta OSAGO"
        dateRange="06.10.2024 - 06.02.2025"
      />
      </section>

    </div>
  );
};

export default Avtomobile;
