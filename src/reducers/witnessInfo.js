import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const witnessReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_WITNESS:
      return {
        title: action.title,
        description: action.description
      }
    default: return state
  }
};

export default witnessReducer;
