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
    case ActionTypes.CHANGE_FOCUSED_WITNESS:
      return Object.assign({}, state, {
        focusedWitness: action.id
      });
    case ActionTypes.CHANGE_FOCUSED_ITEM:
      return {
        ...state,
        focusedItem: action.id
      }
    default: return state;
  }
};

export default viewReducer;
