import { INITIAL_STATE } from '../../common/app-const';

import {
  SET_DEFAULT_WEATHER_DATA,
  IS_LOADING,
  HAS_ERROR,
} from '../actions/types';

export default function (state = INITIAL_STATE.site, action) {
  switch(action.type) {
    case SET_DEFAULT_WEATHER_DATA:
      return {...state, default_weather_data : state.default_weather_data.concat(action.payload)};
    case IS_LOADING:
      return {...state, isLoading: action.isLoading};
    case HAS_ERROR:
      return {...state, hasError: action.hasError};
  }

  return state;
}