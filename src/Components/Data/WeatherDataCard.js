import React from 'react';
// style
import './style.css';

const WeatherDataCard = (props) => {
  
  const { weatherData } = props;
console.log(weatherData);
  return (
    <div id="" className="col-md-6">

        <div id="header" class="">
            <div id="main-header-container" class="">
                <div class="degree"></div>
                <div id='temperature-cell' class=''>

                    <div id='temp-cell-number'>
                        <div id="temp-cell-degree">
                            {/* <!-- degree symbol for temp --> */}
                        </div>
                        {weatherData.temp}
                    </div>
                    {/* <!-- location goes here --> */}
                    <div id="temp-cell-city">
                        <p></p>
                    </div>
                </div>
                <div id='image-cell' class=''>
                    {/* <!-- image goes here on load --> */}
                </div>
            </div>
        </div>

        <div class="">
            <div class="" id="tab-header">
                Info
            </div>

            <div class="" id="info-panel">
                <div id="" class="info-card">
                    <div id="box-wind-spd" class="box-left box-info">
                        <h3></h3>
                    </div>
                    <div id="box-wind-text" class="box-middle box-info">
                        <p>Wind Speed</p>
                    </div>
                    <div id="box-wind-icon" class="box-right box-info">
                        <div id="pole"></div>
                    </div>
                </div>
                <div id="" class="info-card">
                    <div id="box-humidity-percent" class="box-left box-info">
                        <h3></h3>
                    </div>
                    <div id="box-humidity-text" class="box-middle box-info">
                        <p>Humidity</p>
                    </div>
                    <div id="box-wind-icon" class="box-right box-info">
                    </div>
                </div>
                <div id="" class="info-card">
                    <div id="box-sunrise-time" class="box-left box-info time">
                        <h3></h3>
                    </div>
                    <div id="box-sunrise-text" class="box-middle box-info">
                        <p>Sunrise</p>
                    </div>
                    <div id="box-sunrise-icon" class="box-right box-info">
                    </div>
                </div>
                <div id="" class="info-card">
                    <div id="box-sunset-time" class="box-left box-info time">
                        <h3></h3>
                    </div>
                    <div id="box-sunset-text" class="box-middle box-info">
                        <p>Sunset</p>
                    </div>
                    <div id="box-wind-icon" class="box-right box-info">
                    </div>
                </div>
            </div>

            

        </div>
    </div>
  )

};

export default WeatherDataCard;