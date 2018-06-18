import React from 'react';
// components
import WeatherDataCard from './WeatherDataCard';

class Weather extends React.Component {

  constructor(props){
    super(props);

  }
  
  renderData(cityWeatherData){
    return (
      <WeatherDataCard key={cityWeatherData.name} weatherData={cityWeatherData}/>
    )
  }

  render(){

    const { data } = this.props;

    return (
      <div className='col-md-12' style={{marginTop: '50px'}}>
        <h1>Current Weather</h1>
        {data.map(this.renderData)}
      </div>
    )
  }

}


export default Weather;

