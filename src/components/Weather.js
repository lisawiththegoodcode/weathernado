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
                        {/* Lodash is a way to sort through this data
                        
                        reduce, useful for iterating over arrays
                        
                        this is in UTC, starting with the next 3 hr interval from now

                        acumulator = 0
                        is the high greater than the accumulator, if so replace, if no move on to the next one
                        
                        let forecasts = [
                            {high: 70, low: 51}, 
                            etc.
                        ];

                        let highLow
                         
                         write a filter


                         Sending the props
                        

                        Check out deconstructing syntax for state being sent to components

                        getting back forecast object, separate by days

                        JS - date, get current year month day, cut that string, look at .slice, get number of the day
                        filter over the array of objects coming back, filter for ones that are todat
                        turn each day into it's own array, and then can use reduce to find lows and hieghts, chance of rain

                        might be able to find a more interesting API, something a little more useable

                        reduce, map, filter - super powerful for manipulating 

                        today high/low

                        take a look at react set state syntax

                        semantic UI, for react
                        material UI, 
                        react-bootstrap

                    ant - mimimalist design
                         pull in the css link to them
                         assign your component


                         */}
                    
                    </div>
                </div>
             )
        }
        else {
            return null;
        }
        
}

export default Weather;