import React from 'react';

class FiveDay extends React.Component{
    render(){
        const temp = JSON.stringify(this.props.forecast);
        const forecast = JSON.parse(temp);
        const city = forecast.city.name;
        console.log(city);
        if (city !== undefined){
            return(
                <div>
                    <button className="options-btn btn">5 Day</button>
                </div>
             )
        }
        else {
            return null;
        }
    }  
}

export default FiveDay;