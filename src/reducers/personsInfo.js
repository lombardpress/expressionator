import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
const personsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_PERSONS:
      return state
    case ActionTypes.RECEIVE_PERSONS:
      const newArray = action.personsList.map((item) => {
        const shortId = item.personShortId.value
        return {
          id: shortId,
          title: item.personTitle.value,
          description: "scta description",
          status: "SCTA"
        }
      });
      return newArray
    case ActionTypes.RECEIVE_PERSONS_FAILURE:
    case ActionTypes.CREATE_PERSON:
      /// change this to available witness list
      const personList = state.slice();
      personList.push({
        id: action.id,
        title: action.title,
        description: action.description,
        status: "provisional"
      });
      return personList;
    case ActionTypes.UPDATE_PERSON:
      return (
        state.map(person => {
          if (person.id === action.id) {
            if (person.status === 'provisional'){
              return {
                ...person,
                title: action.title,
                description: action.description
              }
            }
            else{
              return {
                ...person,
                proposedChange: {
                  title: action.title,
                  description: action.description
                }
              }
            }
          }
          else {
            return person
          }
        })
      )
    default: return state;
  }
};

export default personsReducer;
