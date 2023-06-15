import React from "react";
import weather from "../data/iconData.json"

function ForecastSummary(props) {
    const { date, description, icon, temperature } = props;
    const weatherCode = `${icon.slice(0,1)}00`;
    const formattedDate = new Date(date).toDateString();

    const filteredObject = weather.weather.filter((iconSet) => {
        return iconSet.id === Number(weatherCode);
    });

  return (
    <div className="forecast-summary" data-testid="forecast-summary">

      <div className="forecast-summary__date">{formattedDate}
      </div>

      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img src={(weather[weatherCode])} alt="" />
      </div>

      <div className="forecast-summary__temperature">{temperature.max}</div>

      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

console.log(ForecastSummary);
export default ForecastSummary;
