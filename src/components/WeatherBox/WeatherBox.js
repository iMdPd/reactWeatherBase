import PickCity from "../PickCity/PickCity";
import WeatherSummary from "../WeatherSummary/WeatherSummary";
import Loader from "../Loader/Loader";

const WeatherBox = (props) => {
  const handleCityName = (city) => {
    console.log(city);
  };

  return (
    <section>
      <PickCity action={handleCityName} />
      <WeatherSummary />
      <Loader />
    </section>
  );
};

export default WeatherBox;
