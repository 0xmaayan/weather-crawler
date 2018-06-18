import {
  SET_WEATHER_DATA,
  IS_LOADING,
  HAS_ERROR
} from './types';
// crawler
import { Weather } from '../../server/crawler';
import slugify from 'slugify';

export const getDefaulWeatherData = (city) => {  
  return (dispatch) => {
    dispatch(siteIsLoading(true));
    Weather(slugify(city)).then(function(data) {
      dispatch(siteIsLoading(false));
      dispatch(setDefaultWeatherData(data));
    }).catch(function (err) {
      dispatch(siteHasError(true));
    });;
  }

}


export function setDefaultWeatherData(data){
  return {
    type: SET_WEATHER_DATA,
    payload: data
  };
}

export function siteIsLoading(bool){
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function siteHasError(bool){
  return {
    type: HAS_ERROR,
    hasError: bool
  };
}