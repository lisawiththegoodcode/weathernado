import React from 'react';

class Weather extends React.Component{
    render(){
        const temperature = this.props.temperature;

        return(
             <div className="weatherDisplay">
                <div className="current">

                </div> 
                <div className="highsLows">

                </div>
                <div className="fiveDay">

                </div>
                {Math.round(temperature)}
            </div>
         )
    }
}

export default Weather;