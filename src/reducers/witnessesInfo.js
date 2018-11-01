import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const witnessesReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_WITNESSES:
      return state
    case ActionTypes.RECEIVE_WITNESSES:
      return action.witnessesList
    case ActionTypes.RECEIVE_WITNESSES_FAILURE:
    default: return state;
  }
};

export default witnessesReducer;
