import React from 'react';
import ReactDOM from 'react-dom';
import WitnessesView from '../../components/WitnessesView';
import { Provider } from 'react-redux';
import { store, actions } from '../../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <WitnessesView/>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
