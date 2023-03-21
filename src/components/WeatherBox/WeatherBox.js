import PickCity from "../PickCity/PickCity";
import WeatherSummary from "../WeatherSummary/WeatherSummary";
import Loader from "../Loader/Loader";
import { useCallback, useState } from "react";

const WeatherBox = (props) => {
  const [weatherData, setWeatherData] = useState();

  const handleCityName = useCallback((city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3745acc32b2f5da91791064011ecabbd&units=metric`;

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
      });
  });

  return (
    <section>
      <PickCity action={handleCityName} />
      <WeatherSummary {...weatherData} />
      <Loader />
    </section>
  );
};

export default WeatherBox;
