import {
  SET_DEFAULT_WEATHER_DATA,
  IS_LOADING,
  HAS_ERROR
} from './types';
// crawler
import { Weather } from '../../server/crawler';

export const getDefaulWeatherData = (city) => {  

  return (dispatch) => {
    Weather(city).then(function(data) {
      dispatch(setDefaultWeatherData(data));
    });
  }

}


export function setDefaultWeatherData(data){
  return {
    type: SET_DEFAULT_WEATHER_DATA,
    payload: data
  };
}

export function tracksIsLoading(bool){
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function tracksHasError(bool){
  return {
    type: HAS_ERROR,
    hasError: bool
  };
}