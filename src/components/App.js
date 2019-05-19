import React, { Component } from 'react';
import '../App.css';
import Header from  './Header';
import Location from  './Location';
import Current from  './Current';
import Today from './Today';
import FiveDay from './FiveDay';

class App extends Component {
  state = {
    currentWeather: {
      clouds: {},
      sys: {},
      main: {},
      weather: [{}],
      wind: {},
    },
    forecast: {
      city: {},
      list: [{}],
    },
  };
  
  getWeather = async (e) => {
    e.preventDefault();
    const api_key = process.env.REACT_APP_API_KEY;
    const zipcode = e.target.elements.zip.value;
    const current_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${api_key}`);    
    const current_response = await current_call.json()
    
    console.log("CURRENT API RESPONSE: ", current_response);
    console.log(typeof current_response);
    const forecast_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&units=imperial&appid=${api_key}`);
    const forecast_response = await forecast_call.json();
    console.log(forecast_response);
    
    this.setState({
      currentWeather: current_response,
      forecast: forecast_response,

      // temperature: current_response.main.temp,
      // zip: current_response.zip,
      // city: current_response.name,
      // country: current_response.sys.country,
      // humidity: current_response.main.humidity,
      // description: current_response.weather[0].description,
      // fiveDayArray: forecast_response.list,
      // low: forecast_response.list[0].main.temp_min,
      // high: forecast_response.list[0].main.temp_max,
      // dt: current_response.dt,
      // sunrise: current_response.sys.sunrise,
      // sunset: current_response.sys.sunset,
      // error: ""
    });
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Location loadWeather={this.getWeather} />
        <Current currentWeather={this.state.currentWeather} /> 
{/* show buttons flexed in a row, onclick go to their respective component */}
        <Today
          currentWeather={(this.state.currentWeather)}
          forecast={(this.state.forecast)} 
        /> 
        <FiveDay
          forecast={(this.state.forecast)}
        /> 
      </div>
    );
  }
}

export default App;
