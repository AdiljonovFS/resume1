import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiMapPin, FiSend, FiTrash } from 'react-icons/fi';
import 'leaflet/dist/leaflet.css';

// Leaflet markerini import qilish
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import BackButton from '../../ui/BackButton';

// Custom Leaflet icon
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Haversine formulasi: ikkita koordinata orasidagi masofani hisoblash
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Yer radiusi (km)
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const Evakuator = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [locations, setLocations] = useState(
    JSON.parse(localStorage.getItem('locations')) || []
  );
  const [center, setCenter] = useState([41.3275, 69.2813]); // Default: Tashkent
  const [evakuatorInfo, setEvakuatorInfo] = useState(null); // Evakuator ma'lumotlari uchun

  const ChangeMapView = ({ coords }) => {
    const map = useMap();
    map.setView(coords, 13);
    return null;
  };

  // Geographic boundaries for Uzbekistan
  const uzbekistanBounds = {
    north: 45.5778, // Northernmost latitude
    south: 37.1406, // Southernmost latitude
    east: 73.0910, // Easternmost longitude
    west: 60.1991, // Westernmost longitude
  };

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
      );
  
      const filteredSuggestions = response.data.filter((item) => {
        const lat = parseFloat(item.lat);
        const lon = parseFloat(item.lon);
        return (
          lat >= uzbekistanBounds.south &&
          lat <= uzbekistanBounds.north &&
          lon >= uzbekistanBounds.west &&
          lon <= uzbekistanBounds.east
        );
      });
  
      // Masofaga qarab saralash
      const sortedSuggestions = filteredSuggestions
        .map((item) => ({
          ...item,
          distance: getDistance(
            center[0],
            center[1],
            parseFloat(item.lat),
            parseFloat(item.lon)
          ),
        }))
        .sort((a, b) => a.distance - b.distance);
  
      setSuggestions(sortedSuggestions);
    } catch (error) {
      console.error('Taxminlarni olishda xatolik:', error);
    }
  };
  

  const handleSearch = async (address, coords) => {
    const newLocation = { id: Date.now(), name: address, coords };
    setLocations((prev) => {
      const updatedLocations = [...prev, newLocation];
      localStorage.setItem('locations', JSON.stringify(updatedLocations));
      return updatedLocations;
    });
    setCenter(coords);
    setAddress('');
    setSuggestions([]);

    try {
      const response = await axios.get(`API_ENDPOINT/?lat=${coords[0]}&lon=${coords[1]}`);
      setEvakuatorInfo(response.data); // API ma'lumotlarini olish
    } catch (error) {
      console.error('Evakuator ma\'lumotlarini olishda xatolik:', error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    if (value.length > 2) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleDeleteLocation = (id) => {
    const updatedLocations = locations.filter((loc) => loc.id !== id);
    setLocations(updatedLocations);
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
  };

  const handleSelectLocation = async (loc) => {
    setCenter(loc.coords);
    
    try {
      const response = await axios.get(`API_ENDPOINT/?lat=${loc.coords[0]}&lon=${loc.coords[1]}`);
      setEvakuatorInfo(response.data); // API ma'lumotlarini olish
    } catch (error) {
      console.error('Evakuator ma\'lumotlarini olishda xatolik:', error);
    }
  };

  return (
    <div className="h-screen grid grid-cols-4 text-gray">
      {/* Sidebar */}
      <div className="col-span-1 p-6 overflow-y-auto">
        <div className="absolute top-4 left-4">
          <BackButton />
        </div>
        <h1 className="text-2xl text-center font-semibold mb-4">Evakuator</h1>
        <div className="relative mb-4 mt-10">
          <input
            type="text"
            placeholder="Manzilni kiriting ..."
            value={address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none text-white bg-bgcolor"
          />
          {suggestions.length > 0 && (
            <ul className="absolute top-12 left-0 right-0 bg-white border rounded-lg shadow-md max-h-48 overflow-y-auto z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() =>
                    handleSearch(suggestion.display_name, [
                      parseFloat(suggestion.lat),
                      parseFloat(suggestion.lon),
                    ])
                  }
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {suggestion.display_name} - {suggestion.distance.toFixed(2)} km
                </li>
              ))}
            </ul>
          )}
        </div>

        <h2 className="text-lg font-medium mb-2">Oxirgi qidiruvlar</h2>
        <div className="space-y-2">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white p-4 rounded-lg flex justify-between items-center"
            >
              <div className="flex items-center cursor-pointer" onClick={() => handleSelectLocation(loc)}>
                <FiMapPin className="text-blue-500 mr-2" />
                <span>{loc.name}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray mr-4">
                  {new Date(loc.id).toLocaleString()}
                </span>
                <FiTrash 
                  className="text-red-500 cursor-pointer" 
                  onClick={() => handleDeleteLocation(loc.id)} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Evakuator ma'lumotlari */}
        {evakuatorInfo && (
          <div className="bg-white p-4 rounded-lg mt-6">
            {/* Manzil va masofa */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className=" p-2 rounded-full mr-2">📍</span>
                <h2 className="text-lg font-medium">{evakuatorInfo.address}</h2>
              </div>
              <p className="text-gray-500">{evakuatorInfo.distance} km</p>
            </div>

            {/* Mashina haqida ma'lumot */}
            <div className="flex items-center mb-4">
              <img
                src="CAR_IMAGE_URL" // Tasvir yo'lini almashtirish kerak
                alt="Car"
                className="w-24 h-24 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{evakuatorInfo.carModel}</h3>
                <p className="text-gray-500">{evakuatorInfo.carNumber}</p>
              </div>
            </div>

            {/* To'lov va chaqirish */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <button className="bg-gray-100 px-4 py-2 rounded-full">PNG</button>
                <span className="ml-2 text-gray-500">{evakuatorInfo.price}</span>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Chaqirish</button>
            </div>
          </div>
        )}
      </div>

      {/* Map */}
      <div className="col-span-3 pb-20">
        <MapContainer center={center} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locations.map((loc) => (
            <Marker key={loc.id} position={loc.coords} icon={customIcon}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
          <ChangeMapView coords={center} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Evakuator;
