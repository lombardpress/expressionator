import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const edfListReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_EDFS:
      return state
    case ActionTypes.RECEIVE_EDFS:
      const newArray = action.edfList.map((item) => {
        const shortId = item.expressionShortId.value
        return {
          id: shortId,
          title: item.expressionTitle.value,
          authorId: item.authorShortId.value,
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
        const copyState1 = state.slice();
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
      const copyState2 = state.slice();
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
    //
    case ActionTypes.REQUEST_EDF_MANIFESTATIONS:
      return state
    case ActionTypes.RECEIVE_EDF_MANIFESTATIONS:
      const organizedManifestations = action.edfManifestations.map((m) => {
        return {
          id: m.witnessShortId.value,
          title: "title",
          description: "description"
        }
      })
    return(
      state.map(edf => {
        if (edf.id === action.expressionShortId) {
          return {
            ...edf,
            manifestations: organizedManifestations,
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
        items: [],
        manifestations: [],
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
    case ActionTypes.ASSOCIATE_SURFACE:

    // something not quite right about this need to name vairable and the way the scope of above variable is accessible within this case.
      const copyState3 = state.slice();
      const edf3 = copyState3.find((edf) => edf.id === action.edfId);
      let item3 = edf3.items.find((i) => i.id == action.itemId);

      if (item3.surfaces)
        item3.surfaces.push({surfaceId: action.surfaceId, itemId: action.itemId, witnessId: action.witnessId})
      else {
        item3.surfaces = []
        item3.surfaces.push({surfaceId: action.surfaceId, itemId: action.itemId, witnessId: action.witnessId})
      }
      return [
        ...copyState3
      ]
    case ActionTypes.RECEIVE_EDFS_FAILURE:
    default: return state;
  }
};

export default edfListReducer;
