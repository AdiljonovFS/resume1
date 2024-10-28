import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import MainContent from './component/MainContent';

function App() {
  return (
    <div className="contaner max-h-max m-auto ">
      <Header />
      <div className='flex min-h-screen bg-gray-100 px-20 pt-10'>
      <Sidebar />
      <MainContent />
      </div>
     </div>
  );
}

export default App;
