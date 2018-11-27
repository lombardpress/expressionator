import ActionTypes from "../actions/action-types";
import { makeid } from "../utils";

/**
 * manifestsReducer
 */
const witnessReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ATTACH_WITNESS:
      const currentWitnesses = state.slice();
      currentWitnesses.push({
        id: "cod-" + makeid(),
        title: action.title,
        description: action.description
      });
      return currentWitnesses;
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
