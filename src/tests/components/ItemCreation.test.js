import React from 'react';
import ReactDOM from 'react-dom';
import ItemCreation from '../../components/ItemCreation';
import { Provider } from 'react-redux';
import { store, actions } from '../../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ItemCreation/>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
