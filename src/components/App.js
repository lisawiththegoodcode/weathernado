import React, { Component } from 'react';
import '../App.css';
import Header from  './Header';
import Location from  './Location';
import Weather from  './Weather';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faIgloo } from '@fortawesome/free-solid-svg-icons';

// library.add(faIgloo)

// const element = <FontAwesomeIcon icon={faCoffee}/>

class App extends Component {
  state = {
    temperature: undefined,
    zip: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const Api_Key = process.env.REACT_APP_API_KEY;
    console.log(Api_Key);
    const zipcode = e.target.elements.zip.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${Api_Key}`);    
    console.log(api_call);
    const response = await api_call.json();
    console.log(response);
    
    this.setState({
      temperature: response.main.temp,
      zip: response.zip,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })
  }

  render() {

    return (
      <div className="App">
        <div className="landing">
            <Header />
            <Location loadWeather={this.getWeather} />
        </div>
        <Weather          
          temperature={this.state.temperature}
          zip={this.state.zip}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} /> 
      </div>
    );
  }
}

export default App;
