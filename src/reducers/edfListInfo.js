import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const edfListReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_EDFS:
      return state
    case ActionTypes.RECEIVE_EDFS:
      const newArray = action.edfList.map((item) => {
        const shortId = item.expressionShortId.value
        return {
          id: shortId,
          title: item.expressionTitle.value,
          authorTitle: item.authorTitle.value,
          description: "scta description",
          status: "SCTA"
        }
      });
      return newArray
    case ActionTypes.REQUEST_EDF_ITEMS:
      return state
    case ActionTypes.RECEIVE_EDF_ITEMS:
    return(
      state.map(edf => {
        if (edf.id === action.expressionShortId) {
          return {
            ...edf,
            items: action.edfItems
          }
        } else {
          return edf
        }
      })
    )
    case ActionTypes.CREATE_EDF:
      /// change this to available witness list
      const edfList = state.slice();
      edfList.push({
        id: action.id,
        title: action.title,
        authorTitle: "authorTitle",
        description: action.description,
        status: "provisional"
      });
      return edfList;
    case ActionTypes.UPDATE_EDF:
      return (
        state.map(edf => {
          if (edf.id === action.id) {
            if (edf.status === 'provisional'){
              return {
                ...edf,
                title: action.title,
                description: action.description
              }
            }
            else{
              return {
                ...edf,
                proposedChange: {
                  title: action.title,
                  description: action.description
                }
              }
            }
          } else {
            return edf
          }
        })
      )
    case ActionTypes.RECEIVE_EDFS_FAILURE:
    default: return state;
  }
};

export default edfListReducer;
