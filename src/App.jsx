import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import MainContent from './component/MainContent';

function App() {
  return (
    <div className="container max-w-screen-xl mx-auto ">
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-950">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
