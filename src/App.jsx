import Weather from "./components/weather";
import Forecast from "./components/forecast";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "./location-marker";
function App() {
  const [weather, setWeather] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentLocation, setCurrentLocation] = useState(null);

  const updateCurrentPosition = (position) => {
    setCurrentLocation(position);
  };

  console.log(import.meta.env.VITE_API_KEY);
  useEffect(() => {
    const getWeather = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async function (position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_API_KEY}`
            );
            const data = await response.json();

            setWeather(data);
            setCurrentLocation([lat, lng]);
          },

          function (error) {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };
    getWeather()
  }, [searchParams]);
  if (currentLocation) {
    return (
      <>
        <div className="absolute z-[2000] bg-white">
          <Weather weather={weather} />
          <Forecast icon="sun" min={10} max={30} text="TOM" />
          <Toaster richColors position="top-center" />
        </div>
        <MapContainer
          style={{ height: "100vh" }}
          center={currentLocation}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker
            updateCurrentPosition={updateCurrentPosition}
            currentLocation={currentLocation}
          />
        </MapContainer>
      </>
    );
  }
}
export default App;
