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
      const organizedItems = action.edfItems.map((item) => {
        return {
          id: item.itemShortId.value,
          title: item.itemTitle.value,
          questionTitle: item.questionTitle ? item.questionTitle.value : ""
        }
      })
    return(
      state.map(edf => {
        if (edf.id === action.expressionShortId) {
          return {
            ...edf,
            items: organizedItems
          }
        } else {
          return edf
        }
      })
    )
    case ActionTypes.UPDATE_ITEM:
        // this variable name "with 1" is to distinguish it from the variable below
        // but this seems weird and suggest that this pattern is not the best way to do things.
        const copyState1 = state
        const edf1 = copyState1.find((edf) => edf.id === action.edfId);
        const item = edf1.items.find((item) => item.id === action.id);
        item.proposedChange = {
          title: action.title,
          questionTitle: action.questionTitle,
        }
        return [
          ...copyState1
        ]
    case ActionTypes.CREATE_ITEM:
      const copyState2 = state
      const edf2 = copyState2.find((edf) => edf.id === action.edfId);
      const newItem = {
        id: action.id,
        proposedChange:{
          title: action.title,
          questionTitle: action.questionTitle
        }
      }
      edf2.items.push(newItem)
      return [
        ...copyState2
      ]
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
