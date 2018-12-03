import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const edfListReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_EDFS:
      return state
    case ActionTypes.RECEIVE_EDFS:
      return action.edfList
    case ActionTypes.RECEIVE_EDFS_FAILURE:
    default: return state;
  }
};

export default edfListReducer;
