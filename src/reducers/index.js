import { combineReducers } from 'redux';
import edfInfo from './edfInfo';
import edfListInfo from './edfListInfo'
import personsInfo from './personsInfo';
import personInfo from './personInfo';
import witnessInfo from './witnessInfo';
import witnessesInfo from './witnessesInfo';
import view from './view';

const rootReducer = combineReducers({
  edfInfo: edfInfo,
  edfListInfo: edfListInfo,
  personsInfo: personsInfo,
  personInfo: personInfo,
  witnessInfo: witnessInfo,
  witnessesInfo: witnessesInfo,
  view: view
});

export default rootReducer;
