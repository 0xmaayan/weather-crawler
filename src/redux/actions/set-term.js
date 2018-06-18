import {
  SITE_SET_TERM,
  IS_LOADING,
  HAS_ERROR
} from './types';
import { Weather } from '../../server/crawler';
import slugify from 'slugify';

export const getTermData = (city) => {  

  return (dispatch) => {
    dispatch(siteIsLoading(true));
    Weather(slugify(city)).then(function(data) {
      dispatch(siteIsLoading(false));
      dispatch(siteSetTerm(data));
    }).catch(function (err) {
      dispatch(siteHasError(true));
    });;
  }

}


export function siteSetTerm(data){
  return {
    type: SITE_SET_TERM,
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