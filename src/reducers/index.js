import { combineReducers } from 'redux';
import edfInfo from './edfInfo';
import personsInfo from './personsInfo';
import personInfo from './personInfo';
import view from './view';

const rootReducer = combineReducers({
  edfInfo: edfInfo,
  personsInfo: personsInfo,
  personInfo: personInfo,
  view: view
});

export default rootReducer;
