import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const edfReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_EDF:
      return {
        title: action.title,
        author: action.author,
        description: action.description
      }
    default: return state;
  }
};

export default edfReducer;
