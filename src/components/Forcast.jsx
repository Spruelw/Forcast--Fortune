import Card from "./Card"
import CurrentCard from "./CurrentCard"
import { daysOfWeek } from "./daysOfWeek"
import Fortune from "./Fortune"




              
function createCard(item, index){
var imgUrl = `https://cdn.weatherbit.io/static/img/icons/${item.weather.icon}.png`
    return (
        <Card
        date={daysOfWeek[new Date(item.datetime).getDay()]}
        imageUrl={imgUrl}
        description= {item.weather.description}
        rainPercentage={item.pop}
        temperature={item.high_temp + "° / " + item.low_temp +"°"}
        />
    )
}

export default function Forecast (props){
    console.log(props)
var data = props.forcastData.data
var todayData = data[0]

var filteredData = data.filter((item) => item !== todayData )
    return (
        <div className="forcast-container">
            <h4>{props.forcastData.city_name + ", " + props.forcastData.state_code}</h4>
            <div className="forcast-grid">
               <CurrentCard 
               key= "01"
                date="Today"
                imgUrl={`https://cdn.weatherbit.io/static/img/icons/${todayData.weather.icon}.png`}
                description={todayData.weather.description}
                currentTemp= {todayData.temp}
                temperatureRange={todayData.high_temp + " / " + todayData.low_temp}
                rainPercentage={todayData.pop }
                windSpd={todayData.wind_spd  }  
               />
               
              {filteredData.map((item, index) => {
                return createCard(item)
                })}
             
                
            </div>
             <Fortune />
        </div>
    )
}