import React from 'react';
import ReactDOM from 'react-dom';
import PersonsListViewer from '../../components/PersonsListViewer';
import { Provider } from 'react-redux';
import { store, actions } from '../../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <PersonsListViewer/>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
