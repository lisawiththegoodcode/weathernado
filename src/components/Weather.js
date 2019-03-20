import React from 'react';

class Weather extends React.Component{
    render(){
        const temperature = this.props.temperature;
        const condition = this.props.description;
        const forecast = this.props.fiveDayArray;
        const city = this.props.city;
        const low = this.props.low;
        const high = this.props.high;

        const worry = () => {
            if (condition.includes("tornado")){
                return "RUN!!";
            } else {
                return "Don't Worry, Be Happy"      
            }
        };

        const icon = () => {
            if (condition.includes("cloud")){
                return "☁️";
            } else if (condition.includes("sun")) {
                return "☀️";   
            } else if (condition.includes("rain")) {
                return "🌧️";  
            } else if (condition.includes("thunder")) {
                return "⚡";   
            } else if (condition.includes("tornado")) {
                return "🌪️";  
            }  else if (condition.includes("snow")) {
                return "❄️";   
            } else if (condition.includes("partly")) {
                return "⛅";  
            } else if (condition.includes("clear")) {
                return "🌌";
            } else {
                return null;
            }
        };

        if (temperature !== undefined){
            return(
                <div className="weatherDisplay">
                    <div className="current">
                        <h1>{city}</h1>
                        <p>{icon()}</p>
                        <h1>{Math.round(temperature)}°</h1>
                        <h2>{condition}</h2>
                        <h3>{worry()}</h3>
                        {console.log(low, high)}
                    </div>

                    <div className="fiveDay">
                        {console.log(forecast)}
                    </div>
                </div>
             )
        }
        else {
            return null;
        }
    }
}

export default Weather;