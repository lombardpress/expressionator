import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const edfReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ASSIGN_EDF:
      return {
        id: action.id,
        title: action.title,
        description: action.description
      }
    case ActionTypes.UPDATE_EDF:
      return {
        id: action.id,
        title: action.title,
        description: action.description
      }
    case ActionTypes.CLEAR_EDF_INFO:
      return {}
    default: return state;
  }
};

export default edfReducer;
