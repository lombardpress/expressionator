import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const witnessesReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_WITNESSES:
      return state
    case ActionTypes.RECEIVE_WITNESSES2:
      return action.witnessesList
    case ActionTypes.RECEIVE_WITNESSES:
      const newArray = action.witnessesList.map((item) => {
        const splitArray = item.witness.value.split("/resource/")
        const id = splitArray[splitArray.length - 1]
        return {
          id: id,
          title: item.witnessTitle.value,
          description: "scta description",
          manifest: item.manifest.value,
          status: "SCTA"
        }
      });
      return newArray
    case ActionTypes.RECEIVE_WITNESSES_FAILURE:
    case ActionTypes.CREATE_WITNESS:
      /// change this to available witness list
      const witnessesList = state.slice();
      witnessesList.push({
        id: action.id,
        title: action.title,
        description: action.description,
        status: "provisional"
      });
      return witnessesList;
    case ActionTypes.UPDATE_WITNESS:
      return (
        state.map(witness => {
          if (witness.id === action.id) {
            return {
              id: witness.id,
              title: witness.title,
              description: witness.description,
              status: witness.status,
              proposedChange: {
                title: action.title,
                description: action.description
              }
            }
          } else {
            return witness
          }
        })
      )
    default: return state;
  }
};

export default witnessesReducer;
