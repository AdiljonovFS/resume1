import { Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import HomePage from "./components/HomePage";
import DocumentsPage from './components/UserProfil'; // Corrected import for DocumentsPage
import SettingsPage from './components/UserProfil'; // Corrected import for SettingsPage

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
