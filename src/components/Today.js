import React from 'react';

class Today extends React.Component{
    render(){
        const temp = JSON.stringify(this.props.currentWeather);
        const currentWeather = JSON.parse(temp);
        const temperature = currentWeather.main.temp;

        if (temperature !== undefined){
            return(
                <div>
                    <button className="options-btn btn">Today</button>
                </div>
             )
        }
        else {
            return null;
        }
    }    
}

export default Today;