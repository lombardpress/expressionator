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
    Axios.get(sparqlEndpoint, { params: { "query": query, "output": "json" } }).then(function (res) {
      dispatch(receivePersons(res.data.results.bindings))
    })
      .catch(error => dispatch(receivePersonsFailure(error))
      );
  });
}

// fetch witnesses

export function requestWitnesses() {
  return {
    type: ActionTypes.REQUEST_WITNESSES,
  };
}
export function receiveWitnesses(witnessesList) {
  return {
    type: ActionTypes.RECEIVE_WITNESSES,
    witnessesList
  };
}
export function receiveWitnessesFailure(error) {
  return {
    type: ActionTypes.RECEIVE_WITNESSES_FAILURE,
    error
  };
}
export function fetchWitnesses() {
  const sparqlEndpoint = "https://sparql-staging.scta.info/ds/query"
  const query = [
    "SELECT DISTINCT ?witness ?witnessTitle ?witnessShortId ",
    "WHERE { ",
    "?witness a <http://scta.info/resource/codex> .",
    // "?witness <http://scta.info/property/shortId> ?witnessShortId .",
    "?witness <http://purl.org/dc/elements/1.1/title> ?witnessTitle .",
    "}",
    "ORDER BY ?witnessTitle"].join('');
  return ((dispatch) => {
    dispatch(requestWitnesses());
    Axios.get(sparqlEndpoint, { params: { "query": query, "output": "json" } }).then(function (res) {
      console.log("res", res)
      dispatch(receiveWitnesses(res.data.results.bindings))
    })
      .catch(error => dispatch(receiveWitnessesFailure(error))
      );
  });
}


export function changeDataCreationView(dataCreationView) {
  if (!dataCreationView) {
    dataCreationView = "edfCreation"
  }

  return {
    type: ActionTypes.CHANGE_DATA_CREATION_VIEW,
    dataCreationView
  }
}

export function updatePerson(title, description) {
  return {
    type: ActionTypes.UPDATE_PERSON,
    title,
    description
  }
}

export function attachWitness(title, description) {
  // Assigns witness to an EDF
  return {
    type: ActionTypes.ATTACH_WITNESS,
    title,
    description
  }
}

export function updateWitness(id, title, description) {
  return {
    type: ActionTypes.UPDATE_WITNESS,
    title,
    description,
    id
  }
}

export function changeFocusedWitness(id) {
  return {
    type: ActionTypes.CHANGE_FOCUSED_WITNESS,
    id: id
  }
}

export function updateEdf(info) {
  return {
    type: ActionTypes.UPDATE_EDF,
    title: info.title,
    author: info.author,
    description: info.description
  }
}
