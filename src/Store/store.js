import { createStore, combineReducers } from 'redux';
import { decrementTime } from '../Store/timerSlice'; 

const rootReducer = combineReducers({
  timer: decrementTime, 
});

const store = createStore(rootReducer);

export default store;
