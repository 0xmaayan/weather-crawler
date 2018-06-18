import { INITIAL_STATE } from '../../common/app-const';

import {
  SET_WEATHER_DATA,
  SITE_SET_TERM,
  IS_LOADING,
  HAS_ERROR,
} from '../actions/types';

export default function (state = INITIAL_STATE.site, action) {
  switch(action.type) {
    case SET_WEATHER_DATA:
      return {...state, weather_data : state.weather_data.concat(action.payload)};
    case SITE_SET_TERM:
      return {...state, weather_data : [action.payload]};
    case IS_LOADING:
      return {...state, isLoading: action.isLoading};
    case HAS_ERROR:
      return {...state, hasError: action.hasError};
  }

  return state;
}