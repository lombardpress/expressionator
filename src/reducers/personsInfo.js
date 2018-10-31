import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const personsReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_PERSONS:
      return state
    case ActionTypes.RECEIVE_PERSONS:
      return action.personsList
    case ActionTypes.RECEIVE_PERSONS_FAILURE:
    default: return state;
  }
};

export default personsReducer;
