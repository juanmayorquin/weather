import Weather from "./components/weather";
import Forecast from "./components/forecast";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
function App() {
  const [weather, setWeather] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentLocationName, setCurrentLocationName] = useState(null);
  useEffect(() => {
    const getWeather = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async function (position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ff6f83768cff80c530584e2628e0ab07`
            );
            const data = await response.json();

            setWeather(data);
            setCurrentLocationName(data.name);
          },

          function (error) {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    if (searchParams.get("city")) {
      const getWeather = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchParams.get("city")}&appid=ff6f83768cff80c530584e2628e0ab07`
        );
        const data = await response.json();
        if (data.cod === "404") {
          toast.error(data.message);
          setSearchParams({});
        } else {
          setWeather(data);
        }
      };
      getWeather();
    } else {
      getWeather();
    }
  }, [searchParams]);
  return (
    <>
   
      <Header currentLocationName={currentLocationName} />
      <Weather weather={weather} />
      <Forecast icon="sun" min={10} max={30} text="TOM" />
      <Toaster richColors position="top-center" />
    </>
  );
}
export default App;
