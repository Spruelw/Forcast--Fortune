import React from "react";
import { useState } from "react";
import axios from "axios";

function Hero(props) {
  const [enteredZip, setEnteredZip] = useState("");

  function handleZipChange(event) {
    setEnteredZip(event.target.value);
  }

  async function search() {
    var config = {
      params: {
        key: "d4f0a1aa058e4b948ac72ea9f1609398",
        units: "I",
        postal_code: enteredZip,
      },
    };

    config.params.days = 7;
    var response = await axios.get(
      "https://api.weatherbit.io/v2.0/forecast/daily",
      config
    );

    props.setForcastData(response.data);
  }

  return (
    <div className="hero">
      <h1>Forecast & Fortune</h1>
      <p>
        Get fast and accurate forecast, along with your fortune for the day{" "}
      </p>
      <div className="search">
        <input onChange={handleZipChange} placeholder="Enter a zip code" />
        <img onClick={search} src="../../images/searchIcon.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;

