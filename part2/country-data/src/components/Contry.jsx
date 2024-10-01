import { useEffect, useState } from "react";
import axios from "axios";

export const Country = ({ country, detail }) => {
  const [showDetail, setShowDetail] = useState(detail);
  const baseUrl = "https://api.openweathermap.org/data/3.0/onecall?";
  const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!showDetail) return;

    const req = axios.get(`${baseUrl}lat=0&lon=0&appid=${weather_api_key}`);
    req
      .then((res) => res.data)
      .then((data) => {
        return { ...country, weather: data };
      })
      .catch((error) => console.log("could not retrieve weather data", error));
  });

  console.log("country", country);

  return (
    <div>
      <div key={country.cca2}>{country.name.common}</div>
      {showDetail ? (
        <div>
          <p>
            <b>Capital: </b>
            {country.capital[0]}
          </p>
          <p>
            <b>Area: </b>
            {country.area}
          </p>
          <h4>languages</h4>
          <ul>
            {Object.values(country.languages).map((lan) => (
              <li key={lan}>{lan}</li>
            ))}
          </ul>
          <p>
            <b>Flag: </b>
            {country.flag}
          </p>
        </div>
      ) : null}
      <button onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? "hide" : "show"}
      </button>
    </div>
  );
};
