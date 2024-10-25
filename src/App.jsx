import { Routes, Route } from 'react-router-dom';

import BottomNav from './components/BottomNav';
import HomePage from "./components/HomePage";
import DocumentsPage from './components/UserProfil';
import SettingsPage from './components/settings/Settings';
import ProfileEdit from './components/settings/ProfileEdit';

import Evakuvator from './components/pages/evakuvator/evakuvator';
import Jarimalar from './components/pages/Jarimalar/Jarimalar';
import CarDetails from './components/pages/avtamobilBolimi/abvtombilbolimi';
import CarDetailingPage from './components/pages/avtamobilBolimi/qaytajixozlash';
import JarimalarningIchi from './components/pages/Jarimalar/JarimalarningIchi';

import bg from "./assets/bg.png";

import Sugurta from './components/timlinePages/Sugurta';
import TexnikKorik from './components/timlinePages/TexnikKorik';
import Guvohnoma from './components/timlinePages/Guvohnoma';
import Tanirovka from './components/timlinePages/Tanirovka';
import Avtomobile from './components/timlinePages/Avtomobile';
import Ishonchnoma from './components/timlinePages/Ishonchnoma';
import Gaz from './components/timlinePages/Gaz';
import CardsPage from './components/settings/Cardpage';

function App() {
  return (
    <div className="flex flex-col h-screen bg-bgSett"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/cardetails" element={<CarDetails />} />
          <Route path="/jixozlash" element={<CarDetailingPage />} />
          <Route path="/evakuvator" element={<Evakuvator />} />
          <Route path="/jarimalar" element={<Jarimalar   />} />
          <Route path="/jarimalar/:id" element={<JarimalarningIchi />} />
          {/* TimeLine */}
          <Route path="/sugurta" element={<Sugurta />} />
          <Route path="/texnikkorik" element={<TexnikKorik />} />
          <Route path="/guvohnoma" element={<Guvohnoma />} />
          <Route path="/tanirovka" element={<Tanirovka />} />
          <Route path="/avtomobilemoyi" element={<Avtomobile />} />
          <Route path="/ishonchnoma" element={<Ishonchnoma />} />
          <Route path="/gaz" element={<Gaz />} />
          {/* settings */}
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/profileEdit" element={<ProfileEdit />} />
          <Route path="/settings/payment" element={<CardsPage />} /> 
        </Routes>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
