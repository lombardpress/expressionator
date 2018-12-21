import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const personReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ASSIGN_PERSON:
      return {
        id: action.id,
        title: action.title,
        description: action.description
      }
    case ActionTypes.UPDATE_PERSON:
      return {
        ...state,
        title: action.title,
        description: action.description
      }
    case ActionTypes.CLEAR_PERSON_INFO:
      return {}
    default: return state
  }
};

export default personReducer;
