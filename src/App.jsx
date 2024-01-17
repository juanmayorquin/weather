import Weather from "./components/weather";
import Forecast from "./components/forecast";
import Header from "./components/header";
function App() {
  return (
    <>
      <Header />
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
