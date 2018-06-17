import { combineReducers } from 'redux';

import SiteReducers from './site';

export default combineReducers({
    site : SiteReducers,
});