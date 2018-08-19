import { combineReducers } from 'redux'

import gridContainer from '../containers/GridContainer/reducer'

export const rootReducer = combineReducers({
    grid: gridContainer
});
