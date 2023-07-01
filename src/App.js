import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Input";
import CurrentWeather from "./CurrentWeather";
import AdditionalInfo from "./AdditionalInfo";
import { Rain, Mist, Clear, Clouds, Haze, Thunderstorm, Smoke } from "./assets";
const weatherBg = {
  Clouds,
  Clear,
  Haze,
  Thunderstorm,
  Rain,
  Smoke,
  Mist,
};
function App() {
  const [cityName, setCityName] = useState("chennai");
  const [trigger, setTrigger] = useState(true);
  const [info, setInfo] = useState();
  const [standard, setStandard] = useState(true);
  const [bg, setBg] = useState(Clouds);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const changeCity = (input) => {
    setCityName(input);
  };
  const changeStandard = () => {
    setStandard(!standard);
  };
  const getWeather = async () => {
    try{
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=${
          standard ? "metric" : "imperial"
        }`
      );
      if (!res.ok) {
        console.clear()
        throw new Error('There was an error')
      } else {
        const data = await res.json();
        setInfo(data);
        let weather = data.weather[0].main;
        setBg(weatherBg[weather] || Clear);
      }
    }catch(err){
      setError(err);
    }finally{
      setLoading(false);
    }
    
  };
  useEffect(() => {
    setLoading(true);
    setError(false);
    getWeather();
  }, [standard, trigger]);//eslint-disable-line
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      {loading && <p className="loader">Loading...</p>}
      {!loading && (
        <Input
          standard={standard}
          city={cityName}
          setCityName={changeCity}
          setStandard={changeStandard}
          submit={setTrigger}
          isError={error}
        />
      )}
      {info && !loading && <CurrentWeather standard={standard} report={info} />}
      {info && !loading && <AdditionalInfo standard={standard} report={info} />}
    </div>
  );
}

export default App;
