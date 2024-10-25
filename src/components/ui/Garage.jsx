import React, { useState, useEffect } from 'react';

const GarageScreen = ({ carImage }) => {
  return (
    <div className="w-screen h-full flex flex-col relative">
      <div className="relative flex-grow flex items-center justify-center">
        {/* Rectangle Gradient */}
        <div
          className="absolute"
          style={{
            top: '15%',
            height: '30%',
            width: '38%',
            background: 'linear-gradient(to bottom, #F3BF00, #F3F3F3)',
          }}
        ></div>

        {/* Oval Gradient */}
        <svg
          className="absolute top-0 left-0 right-0 mx-auto"
          width="100%"
          height="28%"
          viewBox="0 0 400 150"
        >
          <defs>
            <linearGradient id="ovalGradient" x1="1" x2="1" y1="1" y2="0">
              <stop offset="65%" stopColor="#FFC700" />
              <stop offset="100%" stopColor="#F3F3F3" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="75" rx="200" ry="75" fill="url(#ovalGradient)" />
        </svg>

        {/* Car Image */}
        <img
          src={carImage}
          alt="Selected Car"
          className="absolute w-40 h-auto object-contain"
          style={{ bottom: '10%' }}
        />
      </div>
    </div>
  );
};

export default GarageScreen;
