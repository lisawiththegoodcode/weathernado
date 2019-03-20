import React from 'react';

class Location extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.loadWeather}>
              <input type="number" name="zip" placeholder="Zip Code" />
              <button>Get Weather</button>
            </form>
        )
    }
}

export default Location;