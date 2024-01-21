import Weather from "./components/weather";
import Forecast from "./components/forecast";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "./location-marker";
function App() {
  const [weather, setWeather] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const updateCurrentPosition = (position) => {
    setCurrentLocation(position);
  };

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
    if (currentLocation) {
      const getWeather = async () => {
        const lat = currentLocation[0];
        const lng = currentLocation[1];

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        if (data.cod === "400") {
          toast.error("Localización no registrada.");
        } else {
          setWeather(data);
        }
      };
      getWeather();
    } else {
      getWeather();
    }
  }, [currentLocation]);

  if (currentLocation) {
    return (
      <>
        <Toaster richColors position="top-center" />
        <div className="flex justify-center items-center h-screen absolute top-0">
          <div className="flex flex-col items-center z-[2000] bg-white rounded-xl h-[80vh] py-10 px-10 drop-shadow-md ml-4 gap-10 justify-between">
            <Weather weather={weather} />
            <Forecast icon="sun" min={10} max={30} text="TOM" />
          </div>
        </div>
        <MapContainer
          style={{ height: "100vh" }}
          center={currentLocation}
          zoom={13}
          minZoom={4}
          inertia={true}
          
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
