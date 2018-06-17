import request from 'request-promise';
import cheerio from 'cheerio';
//var URL = require('url-parse');

export const Weather = (city) => {

  var name;
  var date;
  var day;
  var icon;
  var temp;
  var humidity;
  var wind;
  var weather_data;

  const pageToVisit = `https://www.weather-forecast.com/locations/${city}/forecasts/latest`;
  var options = {
    uri: pageToVisit,
    transform: function (body) {
        return cheerio.load(body);
    }
  };

  return request(options)
          .then(function ($) {
            $('li.current').each(function(){
              name = $(this).children().text();
            })
            $('tr.b-forecast__table-days').each(function(){
              day = $(this).children()['1'].children['0'].children['0'].children['0'].data;
              date = $(this).children()['1'].children['0'].children['1'].children['0'].data;
            })
            $('div.main-title__weather-icon').each(function(){
              icon = $(this).children().children()['0'].attribs.src;
            })
            $('tr.b-forecast__table-max-temperature').each(function(){
              temp = $(this).children()['1'].children['0'].children['0'].data;
            })
            $('tr.b-forecast__table-humidity').each(function(){
              humidity = $(this).children()['1'].children['0'].children['0'].data;
            })
            $('tr.b-forecast__table-wind').each(function(){
              wind = $(this).children()['1'].children['0'].children['0'].children['2'].children['0'].data;
            })
            
            weather_data = {
              'name':name,
              'day': day,
              'date': date,
              'icon':icon,
              'temp': temp,
              'humidity': humidity,
              'wind': wind
            };
            return weather_data;
          }).catch(function (err) {
            console.log(err);
          });

}

