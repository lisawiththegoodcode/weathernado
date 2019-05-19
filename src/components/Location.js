import React from 'react';

class Location extends React.Component{
    render(){
        return (
            <form className="search" onSubmit={this.props.loadWeather}>
              <input className="search-bar" type="number" name="zip" placeholder="Zip Code" />
              <button className="search-btn btn">Get Weather</button>
            </form>
        )
    }
}

export default Location;