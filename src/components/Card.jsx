export default function Card(props) {
  return (
    <div className="card">
      <p className="date">{props.date}</p>
      <div className="weather-details">
        <div className="weather-description">
          <img src={props.imageUrl} alt="" />
          <p>{props.description}</p>
        </div>
        <p className="high-and-low">{props.temperature}</p>
        <p className="prec">Prec: {props.rainPercentage + "%"}</p>
      </div>
    </div>
  );
}
