import {
  SITE_SET_TERM,
  IS_LOADING,
  HAS_ERROR
} from './types';
import { Weather } from '../../server/crawler';
import slugify from 'slugify';

export const getTermData = (city) => {  

  return (dispatch) => {
    Weather(slugify(city)).then(function(data) {
      dispatch(siteSetTerm(data));
    });
  }

}


export function siteSetTerm(data){
  return {
    type: SITE_SET_TERM,
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