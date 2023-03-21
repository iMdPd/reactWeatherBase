import PickCity from "../PickCity/PickCity";
import WeatherSummary from "../WeatherSummary/WeatherSummary";
import Loader from "../Loader/Loader";
import { useCallback } from "react";

const WeatherBox = (props) => {
  const handleCityName = useCallback((city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3745acc32b2f5da91791064011ecabbd&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return (
    <section>
      <PickCity action={handleCityName} />
      <WeatherSummary />
      <Loader />
    </section>
  );
};

export default WeatherBox;
