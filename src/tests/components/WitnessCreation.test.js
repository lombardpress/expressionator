import React from 'react';
import ReactDOM from 'react-dom';
import WitnessCreation from '../../components/WitnessCreation';
import { Provider } from 'react-redux';
import { store, actions } from '../../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <WitnessCreation/>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
