import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const manifestsReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_MANIFEST:
      return state
    case ActionTypes.RECEIVE_MANIFEST:
      return {
        ...state,
        [action.manifestid]: action.manifestdata
      }
      case ActionTypes.RECEIVE_MANIFEST_FAILURE:
    default: return state;
  };
}

export default manifestsReducer;
