import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../components/NavBar';
import { Provider } from 'react-redux';
import { store, actions } from '../../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <NavBar/>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
