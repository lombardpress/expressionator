// Topics for understanding
// redux modules for nested stores
// state normalisation
// (normalizer library)

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import * as ActionCreators from './actions';

const loggerMiddleware = createLogger();
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

function loadState(){
  try {
    const state = JSON.parse(localStorage.getItem("data-creation-state"));
    //only load state if state is not empty
    if (state){
      return state
    }
    else{
      return undefined
    }
  }
  // if local storage fails do nothing and proceed with the default state
  catch (e) {
    return undefined
    }
  }
const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )),
);

export const actions = ActionCreators;
export default { actions, store };
