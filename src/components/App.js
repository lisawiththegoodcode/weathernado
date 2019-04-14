import React, { Component } from 'react';
import '../App.css';
import Header from  './Header';
import Location from  './Location';
import Weather from  './Weather';

class App extends Component {
  state = {
    temperature: undefined,
    zip: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    fiveDayArray: undefined,
    low: undefined,
    high: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const api_key = process.env.REACT_APP_API_KEY;
    const zipcode = e.target.elements.zip.value;
    const current_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${api_key}`);    
    const current_response = await current_call.json();
    console.log("CURRENT API RESPONSE: ", current_response);
    const forecast_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&units=imperial&appid=${api_key}`);
    const forecast_response = await forecast_call.json();
    console.log(forecast_response);
    
    this.setState({
      temperature: current_response.main.temp,
      zip: current_response.zip,
      city: current_response.name,
      country: current_response.sys.country,
      humidity: current_response.main.humidity,
      description: current_response.weather[0].description,
      fiveDayArray: forecast_response.list,
      low: forecast_response.list[0].main.temp_min,
      high: forecast_response.list[0].main.temp_max,
      error: ""
    })
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Location loadWeather={this.getWeather} />
        <Weather          
          temperature={this.state.temperature}
          zip={this.state.zip}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          fiveDayArray={this.state.fiveDayArray}
          low={this.state.low}
          high={this.state.high}
          error={this.state.error} /> 
      </div>
    );
  }
}

export default App;
