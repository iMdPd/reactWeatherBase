import PickCity from "../PickCity/PickCity";
import WeatherSummary from "../WeatherSummary/WeatherSummary";
import Loader from "../Loader/Loader";
import { useCallback, useState } from "react";

const WeatherBox = (props) => {
  const [weatherData, setWeatherData] = useState();
  const [pending, setPending] = useState(false);

  const handleCityName = useCallback((city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3745acc32b2f5da91791064011ecabbd&units=metric`;

    setPending(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const payload = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main,
        };

        setWeatherData(payload);
        setPending(false);
      });
  });

  return (
    <section>
      <PickCity action={handleCityName} />
      {weatherData && pending === false && <WeatherSummary {...weatherData} />}
      {pending === true && <Loader />}
    </section>
  );
};

export default WeatherBox;
