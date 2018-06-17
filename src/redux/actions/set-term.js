import {
  SITE_SET_TERM,
  IS_LOADING,
  HAS_ERROR
} from './types';


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