import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const viewReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_DATA_CREATION_VIEW:
      return Object.assign({}, state, {
        dataCreationView: action.dataCreationView
      });
    default: return state;
  }
};

export default viewReducer;
