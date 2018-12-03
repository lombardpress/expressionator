import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const personReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ASSIGN_PERSON:
      return {
        title: action.title,
        description: action.description
      }
    default: return state
  }
};

export default personReducer;
