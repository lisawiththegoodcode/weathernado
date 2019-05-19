import React from 'react';
import Icon from './Icon';
import Worry from './Worry';

class Current extends React.Component{
    render(){
        const temp = JSON.stringify(this.props.currentWeather);
        const currentWeather = JSON.parse(temp);
        const sunrise = currentWeather.sys.sunrise;
        const sunset = currentWeather.sys.sunset;
        const condition = currentWeather.weather[0].description;
        const dt = currentWeather.dt;
        const temperature = currentWeather.main.temp;
        const city = currentWeather.name;

        if (temperature !== undefined){
            return(
                <div className="weatherDisplay">
                    <div className="current">
                        <h1>{city}</h1>
                        <Icon condition = {condition} dt = {dt} sunrise = {sunrise} sunset = {sunset}/>
                        <h1>{Math.round(temperature)}°</h1>
                        <h1>{condition}</h1>
                        <Worry condition = {condition} />
                    </div>
                </div>
             )
        }
        else {
            return null;
        }
    }    
}

export default Current;