import Weather from "./components/weather";
import Forecast from "./components/forecast";
function App() {
  return (
    <>
      <Weather
        temp={20}
        min={10}
        max={30}
        wind={10}
        precipitation={10}
        humidity={10}
      />
      <Forecast icon="sun" min={10} max={30} text="TOM" />
    </>
  );
}
export default App;
