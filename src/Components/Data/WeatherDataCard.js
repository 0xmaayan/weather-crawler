import React from 'react';
// style
import './style.css';

const WeatherDataCard = (props) => {
  
  const { weatherData } = props;

  return (
    <div className="col-md-6 col-sm-12" style={{marginTop: '15px'}}>

        <div id="header">
            <div className="cityName">
              <span>{weatherData.country}, </span>
              <span>{weatherData.city}</span>
            </div>
            <div className="cityName">
              <span>{weatherData.day}, </span>
              <span>{weatherData.date}</span>
            </div>

            <div className="degree col-md-6 col-sm-6 col-xs-6">
              <span>{weatherData.temp}</span>
              <span>°C</span>
            </div>

            <div className="weatherImg col-md-6 col-sm-6 col-xs-6">
              <img alt='' src={weatherData.icon} />
            </div>
            
        </div>

        <div className="infoWrapper">
            <div className="" id="info-panel">
                <div id="" className="info-card">
                    <div className="col-md-4 col-xs-4">
                        <img alt='' className='infoImage' src="img/windsock.png" />
                    </div>
                    <div className="col-md-4 col-xs-4">
                        <p>Wind Speed</p>
                    </div>
                    <div className="col-md-4 col-xs-4">
                        <p>{weatherData.wind} km/h</p>
                    </div>
                </div>
                <div id="" className="info-card">
                    <div className="col-md-4 col-xs-4">
                    <img alt='' className='infoImage' src="img/humidity.png" />
                    </div>
                    <div className="col-md-4 col-xs-4">
                        <p>Humidity</p>
                    </div>
                    <div className="col-md-4 col-xs-4">
                     <p>{weatherData.humidity}%</p>
                    </div>
                </div>
            </div>

            

        </div>
    </div>
  )

};

export default WeatherDataCard;