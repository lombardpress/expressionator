import ActionTypes from "../actions/action-types";
import { makeid } from "../utils";

/**
 * manifestsReducer
 */
const witnessReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ATTACH_WITNESS:
      const currentWitnesses = state.slice();

      if (!currentWitnesses.find(wit => wit.id === action.id)){
        currentWitnesses.push(action.info);
        return currentWitnesses;
      }
    case ActionTypes.UN_ATTACH_WITNESS:
      const newList = state.filter((item) => item.id !== action.id);
      return newList;
    case ActionTypes.CLEAR_ASSIGNED_EDF_MANIFESTATIONS:
      return []
    case ActionTypes.UPDATE_WITNESS:
      return (
        state.map(witness => {
          if (witness.id === action.id) {
            return {
              id: witness.id,
              title: action.title,
              description: action.description
            }
          } else {
            return witness
          }
        })
      )

    default:
      return state;
  }
};

export default witnessReducer;
