import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'

 class WeatherList extends Component {

   renderWeather(cityData) {
     const name = cityData.city.name;
     const temps = cityData.list.map(weather => weather.main.temp)
     const toCelsius = temps.map(temp => temp - 273)
     const pressure = cityData.list.map(weather => weather.main.pressure)
     const humidity = cityData.list.map(weather => weather.main.humidity)
     //console.log(temps, 'temps')
     return (
       <tr key={name}>
          <td>{name}</td>
          <td><Chart data={toCelsius} color="orange" units="celsius"/></td>
          <td><Chart data={pressure} color="green" units="hPa"/></td>
          <td><Chart data={humidity} color="black" units="%"/></td>
       </tr>
     );
   }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (celsius)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
            </tr>
          </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {  weather }
  // Same as {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);
