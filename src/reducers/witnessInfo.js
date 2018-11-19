import ActionTypes from "../actions/action-types";
import { makeid } from "../utils";

/**
 * manifestsReducer
 */
const witnessReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_WITNESS:
      const currentWitnesses = state.slice();
      currentWitnesses.push({
        id: "cod-" + makeid(),
        title: action.title,
        description: action.description
      });
      return currentWitnesses;
    default:
      return state;
  }
};

export default witnessReducer;
