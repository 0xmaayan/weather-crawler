import React from 'react';
// components
import WeatherDataCard from './WeatherDataCard';

class Weather extends React.Component {

  constructor(props){
    super(props);

  }
  
  renderData(cityWeatherData){
    return (
      <WeatherDataCard weatherData={cityWeatherData}/>
    )
  }

  render(){

    const { data } = this.props;

    return (
      <div className='col-md-12'>
        {data.map(this.renderData)}
      </div>
    )
  }

}


export default Weather;

