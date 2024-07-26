export default function CurrentCard(props) {
  return (
    <div className="card current-weather ">
      <p className="date">{props.date}</p>
      <div className="current-weather-details">
        <div className="center-container">
          <div className="weather-description">
            <img src={props.imgUrl} alt="" />
            <p>{props.description}</p>
          </div>
          <p className="current-temp">{props.currentTemp + "°"}</p>
        </div>

        <div className="other-details-container">
          <p>{props.temperatureRange}</p>
          <p>Prec: {props.rainPercentage + "%"}</p>
          <p>WindSpd: {props.windSpd + "mph"}</p>
        </div>
      </div>
    </div>
  );
}
