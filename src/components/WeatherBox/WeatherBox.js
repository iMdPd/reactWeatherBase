import PickCity from "../PickCity/PickCity";
import WeatherSummary from "../WeatherSummary/WeatherSummary";
import Loader from "../Loader/Loader";
import { useCallback } from "react";

const WeatherBox = (props) => {
  const handleCityName = useCallback((city) => {
    console.log(city);
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
