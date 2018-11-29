import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { store, actions} from './store';

//get author list
store.dispatch(actions.fetchPersons());
//store.dispatch(actions.fetchWitnesses());

store.subscribe(() => {
  localStorage.setItem("data-creation-state", JSON.stringify(store.getState()))
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
