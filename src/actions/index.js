import Axios from "axios"
import ActionTypes from './action-types';


export function requestPersons() {
  return {
    type: ActionTypes.REQUEST_PERSONS,
  };
}
export function receivePersons(personsList) {
  return {
    type: ActionTypes.RECEIVE_PERSONS,
    personsList
  };
}
export function receivePersonsFailure(error) {
  return {
    type: ActionTypes.RECEIVE_PERSONS_FAILURE,
    error
  };
}
export function fetchPersons() {
  const sparqlEndpoint = "https://sparql-staging.scta.info/ds/query"
  const query = [
      "SELECT DISTINCT ?author ?authorTitle ?authorShortId ",
      "WHERE { ",
      "?author a <http://scta.info/resource/person> .",
      "?resource a <http://scta.info/resource/expression> .",
      "?resource <http://scta.info/property/level> '1' .",
      "?resource <http://www.loc.gov/loc.terms/relators/AUT> ?author .",
      "?author <http://scta.info/property/shortId> ?authorShortId .",
      "?author <http://purl.org/dc/elements/1.1/title> ?authorTitle .",
      "}",
      "ORDER BY ?authorTitle"].join('');
  return ((dispatch) => {
    dispatch(requestPersons());
    const _this = this;
    Axios.get(sparqlEndpoint, {params: {"query" : query, "output": "json"}}).then(function(res){
      dispatch(receivePersons(res.data.results.bindings))
    })
    .catch(error => dispatch(receivePersonsFailure(error))
    );
  });
}

export function changeDataCreationView(dataCreationView){
  if (!dataCreationView){
    dataCreationView = "edfCreation"
  }

  return{
    type: ActionTypes.CHANGE_DATA_CREATION_VIEW,
    dataCreationView
  }
}

export function updatePerson(title, description){
  return{
    type: ActionTypes.UPDATE_PERSON,
    title,
    description
  }
}

export function updateEdf(info){
  return{
    type: ActionTypes.UPDATE_EDF,
    title: info.title,
    author: info.author,
    description: info.description
  }
}
